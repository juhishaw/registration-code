import { json, type LoaderFunctionArgs } from '@remix-run/cloudflare'
import { useLoaderData } from '@remix-run/react'

import PolicyList, { type Policy } from 'app/components/policies/PolicyList'
import { requireUser } from 'app/utils/authentication/session.server'
import { listPolicies } from 'app/utils/policies/policies.server'

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)

  const policies = await listPolicies(user.token)

  return json({items: policies, count: policies.length})
}

export default function PolicyListPage() {
  const policies = useLoaderData<{items: Policy[]}>().items.reduce((all, cur) => {
    all.push({
      ...cur,
      latestVersion: {
        version: cur.latestVersion.version,
        createdAt: new Date(cur.latestVersion.createdAt)
      },
    })
    return all
  }, [] as Policy[])

  return (
    <PolicyList policies={policies} />
  )
}
