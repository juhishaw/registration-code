import { LoaderFunctionArgs, MetaFunction, json } from '@remix-run/cloudflare'
import { Outlet } from '@remix-run/react'

import FullLayout from 'app/components/FullLayout'
import { requireUserId } from 'app/utils/authentication/session.server'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall" },
  ]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  await requireUserId(request, context)

  return json({})
}

export default function PolicyPage() {
  return (
    <FullLayout>
      <Outlet />
    </FullLayout>
  )
}
