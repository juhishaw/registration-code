import { type Policy } from 'app/components/policies/PolicyList'
import { type PolicyConfig } from 'app/components/policies/PolicyConfiguration'
import { fetchFromBackend } from '../backend/fetch.server'
import { PolicyDocument } from '../types'

type BasePolicy = {
  name: string
  description: string
  createdAt: string
  isDeprecated: boolean
}

type BackendPolicy = BasePolicy & {
  configuredVersions: {
    isEnabled: boolean
    version: string
    priority: number
    updatedAt: string
  }[]
}

export const listPolicies = async (token: string) : Promise<Policy[]> => {
  const policies = await fetchFromBackend<{items: BackendPolicy[]}>({
    path: 'api/v1/policy',
    method: 'GET',
    token,
  })
  if (policies.error) {
    return []
  }

  return policies.result.items.map((item) => ({
      id: item.name,
      name: item.name,
      category: 'transaction', // TODO: Fix me
      isConfigured: item.configuredVersions.length > 0,
      latestVersion: {
        version: '1.0.0', // TODO: Fix me
        createdAt: new Date(item.createdAt), // TODO: Fix me
      },
    }
  ))
}

export const listPolicyConfiguration = async (token: string, eventKind: string) : Promise<PolicyConfig[]> => {
  const policies = await fetchFromBackend<{items: BackendPolicy[]}>({
    path: `api/v1/policy/configuration/${eventKind}`,
    method: 'GET',
    token,
  })
  if (policies.error) {
    return []
  }

  // TODO: We should be getting the full list of available versions
  // We would then only return the available versions that are not configured to the user to add
  //  in addition to the list of versions that are configured to display

  return policies.result.items.reduce((all, item) => {
    const versions: PolicyConfig[] = item.configuredVersions.map((version) => {
      return {
        createdAt: new Date(version.updatedAt),
        href: '#',
        isConfigured: true,
        isDeprecated: item.isDeprecated,
        isEnabled: version.isEnabled,
        name: item.name,
        priority: version.priority,
        version: version.version,
        description: item.description,
      }
    })
    return [
      ...all,
      ...versions,
      {
        createdAt: new Date(item.createdAt),
        href: '#',
        isConfigured: false,
        isDeprecated: item.isDeprecated,
        isEnabled: false,
        name: item.name,
        priority: 10000000,
        version: '1.0.0', // TODO: get the latest version
        description: item.description,
      }
    ]
  }, [] as PolicyConfig[]).sort((a, b) => a.priority - b.priority)
}

type NewPolicy = {
  name: string
  version: string
  description: string
  document: PolicyDocument
}

export const createPolicy = async (
  token: string,
  {
    name,
    version,
    description,
    document,
  }: NewPolicy
) : Promise<boolean> => {
  const response = await fetchFromBackend({
    path: 'api/v1/policy',
    method: 'POST',
    token,
    body: JSON.stringify({
      kind: 'v1',
      name,
      version,
      ...(description ? {description} : {}),
      document,
    }),
  })
  if (response.error) {
    return false
  }

  return true
}

type ConfigurePolicy = {
  name: string
  version: string
  priority: number
}

export const configurePolicy = async (
  token: string,
  {
    name,
    version,
    priority,
  }: ConfigurePolicy
) : Promise<boolean> => {
  const configResponse = await fetchFromBackend({
    path: 'api/v1/policy/configuration',
    method: 'POST',
    token,
    body: JSON.stringify({configuration: [{
      eventKind: 'transaction:transfer',
      name,
      version,
      priority: priority,
      isEnabled: true,
    }]}),
  })
  if (configResponse.error) {
    return false
  }

  return true
}

type BasicPolicyInfo = {
  eventId: string
  eventKind: string
}

type Approvals = {
  given: {
    approver: string
    decision: 'approve' | 'deny'
    reason: string
    datetime: string
  }[]
  missing: {
    approvers: string[]
    minimumNeeded: number
  }
  finalDecision: 'approved' | 'denied' | 'pending'
}

export type AddPolicyApprovalResponse = {
  id: string
  approvals?: Approvals
  status: 'Submitted' | 'Denied' | 'Error' | 'Needs Approval'
}

export const approvePolicy = async (
  token: string,
  {
    eventId,
    eventKind,
  }: BasicPolicyInfo
) => {
  const newPolicyState = await fetchFromBackend<AddPolicyApprovalResponse | false>({
    path: `api/v1/policy/event/${eventKind}/id/${eventId}/approval`,
    method: 'POST',
    token,
    body: JSON.stringify({
      decision: 'approve',
    }),
  })
  if (newPolicyState.error) {
    return false
  }
  return newPolicyState.result
}

export const denyPolicy = async (
  token: string,
  {
    eventId,
    eventKind,
  }: BasicPolicyInfo
) => {
  const newPolicyState = await fetchFromBackend<AddPolicyApprovalResponse | false>({
    path: `api/v1/policy/event/${eventKind}/id/${eventId}/approval`,
    method: 'POST',
    token,
    body: JSON.stringify({
      decision: 'deny',
    }),
  })
  if (newPolicyState.error) {
    return false
  }
  return newPolicyState.result
}
