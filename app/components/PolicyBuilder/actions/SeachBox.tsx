/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import React, { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { UsersIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

type Person = {
  id: number
  name: string
  phone: string
  email: string
  role: string
  url: string
  profileUrl: string
  imageUrl: string
}

const people: Person[] = [
  {
    id: 1,
    name: 'Leslie Alexander 1',
    phone: '1-493-747-9031',
    email: 'bob@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: 'Leslie Alexander 2',
    phone: '1-493-747-9031',
    email: 'jane@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 3,
    name: 'Leslie Alexander 3',
    phone: '1-493-747-9031',
    email: 'alex@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 4,
    name: 'Leslie Alexander 4',
    phone: '1-493-747-9031',
    email: 'steve@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 5,
    name: 'Leslie Alexander 5',
    phone: '1-493-747-9031',
    email: 'karen@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 6,
    name: 'Leslie Alexander 6',
    phone: '1-493-747-9031',
    email: 'sara@example.com',
    role: 'Co-Founder / CEO',
    url: 'https://example.com',
    profileUrl: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface Props {
  approvers: string[]
  onAddApprover: (approver: string) => void
}

export default function SearchBox({approvers, onAddApprover}: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredPeople = people.filter((person) => !approvers.includes(person.email)).filter((person) => {
    return person.name.toLowerCase().includes(query.toLowerCase())
  })

  const recent = filteredPeople.slice(0, 5)

  return (
    <div
      tabIndex={2}
      className={classNames(
        open ? 'shadow-2xl' : '',
        "mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white ring-1 ring-black ring-opacity-5 transition-all"
      )}
      onBlur={(event: React.FocusEvent) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setOpen(false)
        }
      }}
    >
      <Combobox onChange={(person: Person) => {}}>
        {({ activeOption }) => (
          <>
            <div className="relative">
              <MagnifyingGlassIcon
                className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <Combobox.Input
                className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                placeholder="Find an approver..."
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setOpen(true)}
              />
            </div>

            {open && filteredPeople.length > 0 && (
              <Combobox.Options as="div" static hold className="flex transform-gpu divide-x divide-gray-100 overflow-visible">
                <div
                  className={classNames(
                    'max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4',
                    activeOption ? 'sm:h-96' : ''
                  )}
                >
                  {query === '' && (
                    <h2 className="mb-4 mt-2 text-xs font-semibold text-gray-500">Recent searches</h2>
                  )}
                  <div className="-mx-2 text-sm text-gray-700">
                    {(query === '' ? recent : filteredPeople).map((person) => (
                      <Combobox.Option
                        as="div"
                        key={person.id}
                        value={person}
                        className={({ active }) =>
                          classNames(
                            'flex cursor-default select-none items-center rounded-md p-2',
                            active ? 'bg-gray-100 text-gray-900' : ''
                          )
                        }
                      >
                        {({ active }) => (
                          <>
                            <img src={person.imageUrl} alt="" className="h-6 w-6 flex-none rounded-full" />
                            <span className="ml-3 flex-auto truncate">{person.name}</span>
                            {active && (
                              <ChevronRightIcon
                                className="ml-3 h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            )}
                          </>
                        )}
                      </Combobox.Option>
                    ))}
                  </div>
                </div>

                {activeOption && (
                  <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                    <div className="flex-none p-6 text-center">
                      <h2 className="mt-3 font-semibold text-gray-900">{activeOption.name}</h2>
                      <p className="text-sm leading-6 text-gray-500">{activeOption.role}</p>
                    </div>
                    <div className="flex flex-auto flex-col justify-between p-6">
                      <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                        <dt className="col-end-1 font-semibold text-gray-900">Email</dt>
                        <dd className="truncate">
                          {activeOption.email}
                        </dd>
                      </dl>
                      <button
                        type="button"
                        onClick={()=>{onAddApprover(activeOption.email)}}
                        className="mt-6 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Add Approver
                      </button>
                    </div>
                  </div>
                )}
              </Combobox.Options>
            )}

            {open && filteredPeople.length === 0 && (
              <div className="px-6 py-14 text-center text-sm sm:px-14">
                <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                <p className="mt-4 font-semibold text-gray-900">No people found</p>
              </div>
            )}
          </>
        )}
      </Combobox>
    </div>
  )
}
