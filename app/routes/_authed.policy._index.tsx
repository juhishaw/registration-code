import { type MetaFunction } from '@remix-run/cloudflare'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall - Policies" },
  ]
}

export default function PolicyPage() {
  return (
    <p>Let's start!</p>
  )
}
