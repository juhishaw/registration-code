import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'

interface Props {
  onDelete: () => void
  onUpdate: (value: {value: string} | {field: string}, list: {name: string} | {list: string[]}) => void
  kind: string
}

export default function IsValueInListConfiguration({
  kind,
  onUpdate,
  onDelete,
}: Props) {
  const [value, setValue] = useState({value: ''} as ({value: string} | {field: string}))
  const [list, setList] = useState({name: ''} as ({name: string} | {list: string[]}))
  const [open, setOpen] = useState(false)

  const setValueAsValue = (value: string) => {
    setValue({ value })
  }
  const setValueAsField = (value: string) => {
    setValue({ field: value })
  }

  const setListAsName = (value: string) => {
    setList({ name: value })
  }
  const setListAsList = (value: string[]) => {
    setList({ list: value })
  }

  const onSave = () => {
    setOpen(false)
    onUpdate(value, list)
  }

  return (
    <>
      <PolicyChip value={kind} onDelete={onDelete} onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                      <div className="h-0 flex-1 overflow-y-auto">
                        <div className="bg-indigo-700 px-4 py-6 sm:px-6">
                          <div className="flex items-center justify-between">
                            <Dialog.Title className="text-base font-semibold leading-6 text-white">
                              Configure Rule
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="relative rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setOpen(false)}
                              >
                                <span className="absolute -inset-2.5" />
                                <span className="sr-only">Close panel</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-1">
                            <p className="text-sm text-indigo-300">
                              Add parameters to your rule to configure your desired behavior.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <div>
                                <label
                                  htmlFor="spending-limit"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Field to check
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="spending-limit"
                                    id="spending-limit"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="100"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValueAsField(e.target.value)}
                                    defaultValue={typeof (value as any).field === 'string' ? (value as any).field : (value as any).value}
                                  />
                                </div>
                              </div>
                              <div>
                                <label
                                  htmlFor="time-period"
                                  className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Name of List
                                </label>
                                <div className="mt-2">
                                  <input
                                    type="text"
                                    name="time-period"
                                    id="time-period"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="24"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setListAsName(e.target.value)}
                                    defaultValue={typeof (list as any).name === 'string' ? (list as any).name : JSON.stringify((list as any).list)}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-shrink-0 justify-end px-4 py-4">
                        <button
                          type="button"
                          className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="ml-4 inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          onClick={() => onSave()}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}
