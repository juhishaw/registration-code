import { ChangeEvent, Fragment, useState } from 'react'
import { useActionData, useNavigate, useNavigation, useSubmit } from '@remix-run/react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { ActionFunctionArgs, json, redirect } from '@remix-run/cloudflare'
import { requireUser } from 'app/utils/authentication/session.server'
import { Category, addToAllowDenyList } from 'app/utils/account/account.server'
import { AddAddressesToAllowDenyListRequest, DenyAddressWithCategory } from 'app/utils/types'

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const user = await requireUser(request, context)

  const formData = await request.formData()
  const addresses = JSON.parse(formData.get('items')?.toString() || '[]') as Address[]

  const allowDenyList = addresses.reduce((all, addr) => {
    if (addr.rule === 'Allow') {
      (all.allowList as string[]).push(addr.name)
    } else {
      (all.denyList as DenyAddressWithCategory[]).push({
        address: addr.name,
        category: addr.category as Category,
      })
    }
    return all
  }, {allowList:[], denyList:[]} as AddAddressesToAllowDenyListRequest)

  if (await addToAllowDenyList(user.token, allowDenyList)) {
    return json({success:true})
  }

  return json({error: {
    message: 'Failed to save list.'
  }})
}

const rules : Record<'Allow'|'Deny',string> = {
  Allow: 'text-green-700 bg-green-50 ring-green-600/20',
  Deny: 'text-red-600 bg-red-50 ring-red-500/10',
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Address = {
  name:string
  id:string
  rule:string
  category:string
  href:string
}

export default function AddAllowDenyAddresses() {
  const [addresses, setAddresses] = useState([] as Address[])
  const navigate = useNavigate()
  const navigation = useNavigation()
  const submit = useSubmit()
  const data = useActionData<typeof action>()
  const [show, setShow] = useState(true)

  if (data && (data as {success:boolean}).success) {
    if (navigation.state === 'idle' && show) {
      navigate(-1)
      setShow(false)
    }
  }

  const importHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files as FileList
    if (!fileList || fileList.length === 0) {
      return
    }
    const fileReader = new FileReader()
    fileReader.onload = () => {
      const str = String(fileReader.result)
      try {
        const lines = str.split('\n')
        const originalAddresses = addresses.map((addr) => ({
          address:addr.name,
          allow:addr.rule==='Allow',
          category:addr.category
        }))
        const newAddresses = lines.reduce((all, line) => {
          let parts: string[] = []
          if (line.includes(',')) {
            parts = line.split(',')
          } else if (line.includes('\t')) {
            parts = line.split('\t')
          }
          if (parts.length < 2 || all.find((addr) => addr.address === parts[0])) {
            return all
          }
          if (parts.length === 2) {
            all.push({
              address: parts[0],
              allow: parts[1] === 'allow',
              category: 'None',
            })
          } else if (parts.length === 3) {
            all.push({
              address: parts[0],
              allow: parts[1] === 'allow',
              category:
                (parts[2] === 'none') ? 'None' :
                (parts[2] === 'fraud') ? 'Fraud' : 
                (parts[2] === 'laundering') ? 'Laundering' : 
                'Phishing',
            })
          }
          return all
        }, originalAddresses as {address:string, allow:boolean, category:string}[])
        setAddresses(newAddresses.map((address) => {
          return {
            name: address.address,
            rule: address.allow ? 'Allow' : 'Deny',
            category: address.category,
            href: '#',
            id: address.address,
          }
        }))
      } catch (error) {
        console.log(error)
      }
    }
    fileReader.readAsBinaryString(fileList[0])
  }

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => navigate(-1)}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                              Configure Wallets
                            </Dialog.Title>
                            <p className="text-sm text-gray-500">
                              Add addresses manually or select a file to import many addresses at one time.
                            </p>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="relative text-gray-400 hover:text-gray-500"
                              onClick={() => navigate(-1)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        {/* Project name */}
                        <div className="space-y-2 px-4">
                          <div className="flex items-center justify-center w-full">
                            <label htmlFor="dropzone-file" className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    vectorEffect="non-scaling-stroke"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                                  />
                                </svg>
                                <p className="mt-2 block text-sm text-gray-900"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500">CSV or TSV</p>
                                <p className="text-xs text-gray-500"></p>
                                <p className="text-xs text-gray-500">{`Format: <address>,<allow or deny>,<fraud or phishing or laundering or none>`}</p>
                              </div>
                              <input id="dropzone-file" accept=".csv,.tsv" type="file" className="sr-only" onChange={importHandler} />
                            </label>
                          </div> 
                          <div className="flex border-t border-gray-100 pt-6">
                            <button type="button" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                              <span aria-hidden="true">+</span> Add another address
                            </button>
                          </div>
                          <ul role="list" className="divide-y divide-gray-100">
                            {addresses.map((address) => (
                              <li key={address.id} className="flex items-center justify-between gap-x-6 py-5">
                                <div className="min-w-0">
                                  <div className="flex items-start gap-x-3">
                                    <p className="text-sm font-semibold leading-6 text-gray-900">{address.name}</p>
                                    <p
                                      className={classNames(
                                        rules[address.rule as ('Allow' | 'Deny')],
                                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                                      )}
                                    >
                                      {address.rule}
                                    </p>
                                  </div>
                                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                                    <p className="truncate">{address.category}</p>
                                  </div>
                                </div>
                                <div className="flex flex-none items-center gap-x-4">
                                  <Menu as="div" className="relative flex-none">
                                    <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900">
                                      <span className="sr-only">Open options</span>
                                      <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                    </Menu.Button>
                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-100"
                                      enterFrom="transform opacity-0 scale-95"
                                      enterTo="transform opacity-100 scale-100"
                                      leave="transition ease-in duration-75"
                                      leaveFrom="transform opacity-100 scale-100"
                                      leaveTo="transform opacity-0 scale-95"
                                    >
                                      <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              type="button"
                                              onClick={() => {}}
                                              className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                              )}
                                            >
                                              Edit<span className="sr-only">, {address.name}</span>
                                            </button>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <button
                                              type="button"
                                              onClick={() => {
                                                setAddresses(addresses.filter((addr) => addr.id !== address.id))
                                              }}
                                              className={classNames(
                                                active ? 'bg-gray-50' : '',
                                                'block px-3 py-1 text-sm leading-6 text-gray-900'
                                              )}
                                            >
                                              Delete<span className="sr-only">, {address.name}</span>
                                            </button>
                                          )}
                                        </Menu.Item>
                                      </Menu.Items>
                                    </Transition>
                                  </Menu>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => navigate(-1)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          onClick={() => submit({items: JSON.stringify(addresses)}, {method: 'post'})}
                          className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          disabled={addresses.length === 0}
                        >
                          Add Wallets
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
