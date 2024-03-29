import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { UserSession, logout } from 'app/utils/authentication/session.server'
import { useAuthContext } from 'app/components/authentication/AuthProvider'
import { useMatch, useNavigate, useResolvedPath } from '@remix-run/react'
import KnotLogo from 'app/components/logos/KnotLogo'

const navigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Policies', href: '/policy' },
]
const userNavigation = [
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  children: React.ReactNode
}

export default function FullLayout({ children }: Props) {
  const { getUser } = useAuthContext()
  const user = getUser() as UserSession
  const navigate = useNavigate()

  const background = 'bg-gradient-to-r from-indigo-950 to-blue-950'
  const buttonBackground = 'text-gray-100 bg-gradient-to-r from-indigo-800 to-blue-800  bg-opacity-75'
  const buttonHoveredBackground = 'text-gray-100 hover:bg-gradient-to-r from-indigo-800 to-blue-800 hover:bg-opacity-75'

  return (
    <>
      <div className="min-h-full">
        <div className={classNames(background, "pb-32")}>
          <Disclosure as="nav" className={classNames(
            background,
            "border-b border-gray-300 border-opacity-25 lg:border-none"
          )}>
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
                  <div className="relative flex h-16 items-center justify-between lg:border-b lg:border-gray-600 lg:border-opacity-25">
                    <div className="flex items-center px-2 lg:px-0">
                      <KnotLogo className='h-auto w-40' />
                      <div className="hidden lg:ml-10 lg:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                useMatch(useResolvedPath(item.href).pathname)
                                  ? buttonBackground
                                  : buttonHoveredBackground,
                                'rounded-md py-2 px-3 text-sm font-medium'
                              )}
                              aria-current={useMatch(useResolvedPath(item.href).pathname) ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
                      <div className="w-full max-w-lg lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative text-gray-600 focus-within:text-gray-900">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                          </div>
                          <input
                            id="search"
                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-cyan-950 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950 sm:text-sm sm:leading-6"
                            placeholder="Search"
                            type="search"
                            name="search"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:hidden">
                      {/* Mobile menu button */}
                      <Disclosure.Button className={classNames(
                        background,
                        buttonHoveredBackground,
                        'relative inline-flex items-center justify-center rounded-md p-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950'
                      )}>
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                        )}
                      </Disclosure.Button>
                    </div>
                    <div className="hidden lg:ml-4 lg:block">
                      <div className="flex items-center">
                        <button
                          type="button"
                          className={classNames(
                            background,
                            'relative flex-shrink-0 rounded-full p-1 text-gray-200 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950'
                          )}
                        >
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">View notifications</span>
                          <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3 flex-shrink-0">
                          <div>
                            <Menu.Button className={classNames(
                              background,
                              'relative flex rounded-full text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950'
                            )}>
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              {user.profilePicture ?
                                <img className="h-8 w-8 rounded-full" src={user.profilePicture} alt="" />
                              :
                                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                                  <span className="text-xs font-medium leading-none text-gray-100">CN</span>
                                </span>
                              }
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <button
                                      type="button"
                                      onClick={() => navigate('/logout')}
                                      className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                      )}
                                    >
                                      {item.name}
                                    </button>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="lg:hidden">
                  <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          useMatch(useResolvedPath(item.href).pathname)
                            ? 'bg-gray-700 text-white'
                            : 'text-white hover:bg-gray-700 hover:bg-opacity-75',
                          'block rounded-md py-2 px-3 text-base font-medium'
                        )}
                        aria-current={useMatch(useResolvedPath(item.href).pathname) ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 pb-3 pt-4">
                    <div className="flex items-center px-5">
                      <div className="flex-shrink-0">
                        {user.profilePicture ?
                          <img className="h-10 w-10 rounded-full" src={user.profilePicture} alt="" />
                        :
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500">
                            <span className="text-xs font-medium leading-none text-gray-100">CN</span>
                          </span>
                        }
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-white">{user.fullName}</div>
                        <div className="text-sm font-medium text-gray-300">{user.username}</div>
                      </div>
                      <button
                        type="button"
                        className={classNames(
                          background,
                          'relative ml-auto flex-shrink-0 rounded-full p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cyan-950'
                        )}
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          href={item.href}
                          className={classNames(
                            buttonHoveredBackground,
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                        >
                          {item.name}
                        </Disclosure.Button>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">{children}</div>
          </div>
        </main>
        <footer>
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-700 sm:text-left">
              <span className="block sm:inline">&copy; 2023 Web3Firewall, Inc.</span>{' '}
              <span className="block sm:inline">All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
