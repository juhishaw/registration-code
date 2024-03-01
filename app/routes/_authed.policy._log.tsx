import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/cloudflare'
import { Outlet, useLoaderData } from '@remix-run/react'
import { createContext } from 'react'

import { getAllTransferActivity } from 'app/utils/activity/activity.server'
import { requireUser } from 'app/utils/authentication/session.server'
import { EvaluatedTransferEvent } from 'app/utils/types'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall" },
    { name: "description", content: "AI Powered Compliance: Transact with Confidence" },
  ]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)

  const activity = await getAllTransferActivity(user.token)

  return json(activity)
}

export const TransferActivityContext = createContext([] as EvaluatedTransferEvent[])

export default function PolicyActivityLoader() {
  const activity: EvaluatedTransferEvent[] = useLoaderData<typeof loader>()

  return (
    <TransferActivityContext.Provider value={activity}>
      <Outlet />
    </TransferActivityContext.Provider>
  )
}
