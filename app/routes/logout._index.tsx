import { LoaderFunctionArgs } from '@remix-run/cloudflare'

import { logout } from 'app/utils/authentication/session.server'

export async function loader({ request, context }: LoaderFunctionArgs) {
  console.log('logging the user out')
  throw await logout(request, context)
}
