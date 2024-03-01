export type PolicyItem = {
  id: string
  kind: string
  parameters?: Parameters
}

export type EventType = 'transaction:transfer' | 'policy:create' | 'policy:delete' | 'policy:update'

export type Parameters = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any
}

export type Rule = {
  parameters?: Parameters
}

export type RuleSet = {
  parameters?: Parameters
  and?: RuleSet
  or?: RuleSet
  xor?: RuleSet
  not?: RuleSet
} & {
  [rule: string]: {
    parameters?: Parameters
  }
}

export type PolicyApprovers = {
  required?: number
  approvers: string[]
}

export type PolicyApproverList = {
  or: PolicyApproverList
  and: PolicyApproverList
  not: PolicyApproverList
} & Record<string, PolicyApprovers>

export type PolicyActionKind = 'allow' | 'deny' | 'needsApproval' | 'nothing'

export type PolicyInfo = {
  name: string
  version: string
  description: string
}

export type PolicyAction = {
  action: PolicyActionKind
  stopAfter?: boolean
  notifiers?: string[]
  approvals?: PolicyApproverList
}

export type NoPolicyAction = {
  action: undefined
}

type Category = 'Fraud' | 'Phishing' | 'Laundering' | 'None'

export type PolicyDocument = {
  if?: RuleSet
  then?: PolicyDocument
  else?: PolicyDocument
} & (NoPolicyAction | PolicyAction)

export type DenyAddressWithCategory = {
  address: string
  category: Category
}

export type AddAddressesToAllowDenyListRequest = {
  allowList?: string[]
  denyList?: DenyAddressWithCategory[]
}

export type Approvals = {
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

export type EvaluatedEvent = Action & {
  id: string
  approvals?: Approvals
  status: 'Submitted' | 'Denied' | 'Error' | 'Needs Approval'
}

export type EvaluatedTransferEvent = TransferTransactionEvent & {
  id: string
  approvals?: Approvals
  status: 'Submitted' | 'Denied' | 'Error' | 'Needs Approval'
}

export type ListEventsInActivityLogResponse = {
  items: EvaluatedEvent[]
  count: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ActionData = any

type EventBase = {
  kind: EventType
  datetime: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parameters?: any
  data: ActionData
}

type IsTransactionSafeRequest = {
  kind: string
  network: string
  from: string
  to: string
  nonce?: number
  value?: string
  data?: string
  gasLimit?: string
  maxPriorityFeePerGas?: string
  maxFeePerGas?: string
  gasPrice?: string
}

type TransferTransactionEvent = EventBase & {
  kind: 'transaction:transfer'
  data: IsTransactionSafeRequest
}

type PolicyCreateEvent = EventBase & {
  kind: 'policy:create'
  data: Record<string, string>
}

type PolicyDeleteEvent = EventBase & {
  kind: 'policy:delete'
  data: Record<string, string>
}

type PolicyUpdateEvent = EventBase & {
  kind: 'policy:update'
  data: Record<string, string>
}

export type Action = TransferTransactionEvent | PolicyCreateEvent | PolicyDeleteEvent | PolicyUpdateEvent

