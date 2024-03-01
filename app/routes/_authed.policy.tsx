import {
  BellIcon,
  CreditCardIcon,
  CubeIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { MetaFunction } from '@remix-run/cloudflare'
import { Outlet, useMatch, useNavigate, useResolvedPath } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall - Policies" },
  ]
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const secondaryNavigation: ({name:string, href:string, icon: any, current: boolean, isDivider?: false} | {name:string, isDivider: true })[] = [
  { name: 'Getting Started', href: '', icon: UserCircleIcon, current: true },
  { name: 'Policy', isDivider: true },
  { name: 'Policies', href: 'list', icon: UserCircleIcon, current: false },
  { name: 'Policy Configuration', isDivider: true },
  { name: 'Transaction Actions', href: 'transaction', icon: BellIcon, current: false },
  { name: 'Policy Actions', href: 'policy', icon: CubeIcon, current: false },
  { name: 'Permission Actions', href: 'permission', icon: CreditCardIcon, current: false },
  { name: 'Policy Settings', isDivider: true },
  { name: 'Allow-Deny List', href: 'allow-deny', icon: UsersIcon, current: false },
  { name: 'Activity', isDivider: true },
  { name: 'Activity Log', href: 'activity', icon: UsersIcon, current: false },
  { name: 'Policy Approvals', href: 'approvals', icon: UsersIcon, current: false },
]

export default function PolicyPage() {
  const navigate = useNavigate()

  return (
    <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-2 lg:pt-6 lg:py-16">
      <aside className="flex overflow-x-auto border-b border-gray-900/5 lg:block lg:w-64 lg:flex-none lg:border-0">
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul role="list" className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
            {secondaryNavigation.map((item) => (
              !item.isDivider ?
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => navigate(item.href, {relative:'route'})}
                  className={classNames(
                    !!useMatch(useResolvedPath(item.href).pathname)
                      ? 'bg-gray-50 text-indigo-600'
                      : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50',
                    'group w-full flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm leading-6 font-semibold'
                  )}
                >
                  <item.icon
                    className={classNames(
                      !!useMatch(useResolvedPath(item.href).pathname) ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                      'h-6 w-6 shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </button>
              </li> :
              <li key={item.name}>
                <div className="text-xs font-semibold leading-6 text-gray-400">{item.name}</div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="px-4 sm:px-6 lg:flex-auto lg:px-0">
        <div className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
