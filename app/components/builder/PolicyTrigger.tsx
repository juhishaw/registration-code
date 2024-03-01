import React, { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {
  CodeBracketIcon,
  CurrencyDollarIcon,
  DocumentIcon,
  ExclamationCircleIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline'

import TransferTrigger, { TriggerProps } from 'app/components/builder/triggers/TransferTrigger'
import { Parameters, PolicyItem } from 'app/utils/types'
import { classNames } from 'app/utils/helpers'

const triggers = [
  {
    name: 'Funds Transfer',
    description: 'Funds are being transfered from a wallet.',
    render: (props: TriggerProps) => {return (<TransferTrigger {...props} />)},
    color: 'bg-indigo-500',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Policy Change',
    description: 'A policy is being created or updated.',
    render: (props: TriggerProps) => {return (<div>Policy Change</div>)},
    color: 'bg-amber-500',
    icon: CodeBracketIcon,
  },
  {
    name: 'User Group Change',
    description: 'A user is being added or removed from a group.',
    render: (props: TriggerProps) => {return (<div>User Group Change</div>)},
    color: 'bg-rose-500',
    icon: PhotoIcon,
  },
  {
    name: 'User Permissions Change',
    description: 'A permission is being added or removed for a user.',
    render: (props: TriggerProps) => {return (<div>User Permission Change</div>)},
    color: 'bg-emerald-500',
    icon: DocumentIcon,
  },
]

interface Props {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

export default function PolicyTrigger({items=[], addItem, onRemove, onUpdate}: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [triggerType, setTriggerType] = useState(undefined as typeof triggers[0] | undefined)

  const filteredItems =
    query === ''
      ? triggers.slice(0, 5)
      : triggers.filter((item) => {
          return item.name.toLowerCase().includes(query.toLowerCase())
        })

  if (triggerType) {
    return triggerType.render({items, addItem, onRemove, onUpdate})
  } else if (items.length > 0) {
    return (<TransferTrigger items={items} addItem={addItem} onRemove={onRemove} onUpdate={onUpdate} />)
  }

  return (
    <>
      <button
        type="button"
        onClick={()=>setOpen(true)}
        className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6"
          />
        </svg>
        <span className="mt-2 block text-sm font-semibold text-gray-900">Choose a trigger for your policy</span>
      </button>
      <Transition.Root show={open} as={Fragment} afterLeave={() => setQuery('')} appear>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                <Combobox onChange={setTriggerType}>
                  <div className="relative">
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <Combobox.Input
                      className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                      placeholder="Select a trigger..."
                      onChange={(event) => setQuery(event.target.value)}
                    />
                  </div>

                  {filteredItems.length > 0 && (
                    <Combobox.Options static className="max-h-96 transform-gpu scroll-py-3 overflow-y-auto p-3">
                      {filteredItems.map((item, itemIndex) => (
                        <Combobox.Option
                          key={itemIndex}
                          value={item}
                          className={({ active }) =>
                            classNames('flex cursor-default select-none rounded-xl p-3', active ? 'bg-gray-100' : '')
                          }
                        >
                          {({ active }) => (
                            <>
                              <div
                                className={classNames(
                                  'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                  item.color
                                )}
                              >
                                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                              </div>
                              <div className="ml-4 flex-auto">
                                <p
                                  className={classNames(
                                    'text-sm font-medium',
                                    active ? 'text-gray-900' : 'text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </p>
                                <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                  {item.description}
                                </p>
                              </div>
                            </>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  )}

                  {query !== '' && filteredItems.length === 0 && (
                    <div className="px-6 py-14 text-center text-sm sm:px-14">
                      <ExclamationCircleIcon
                        type="outline"
                        name="exclamation-circle"
                        className="mx-auto h-6 w-6 text-gray-400"
                      />
                      <p className="mt-4 font-semibold text-gray-900">No results found</p>
                      <p className="mt-2 text-gray-500">No components found for this search term. Please try again.</p>
                    </div>
                  )}
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
