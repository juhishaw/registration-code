import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'
import PolicyConfiguration, { PolicyConfig } from 'app/components/policies/PolicyConfiguration'

import { requireUser } from 'app/utils/authentication/session.server'
import { listPolicyConfiguration } from 'app/utils/policies/policies.server'

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)

  const policies = await listPolicyConfiguration(user.token, 'policy:create') // TODO: drop the :create

  return json({items: policies, count: policies.length})
}

export default function PolicyPolicyConfiguration() {
  const config: PolicyConfig[] = useLoaderData<typeof loader>().items.reduce((all, item) => {
    all.push({
      ...item,
      createdAt: new Date(item.createdAt),
    })
    return all
  }, [] as PolicyConfig[])

  return (
    <PolicyConfiguration configuration={config} kind="Policies" />
  )
}
