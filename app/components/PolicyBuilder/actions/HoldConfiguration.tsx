import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Fragment, useState } from 'react'

import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import SearchBox from './SeachBox'

interface Props {
  onDelete: () => void
  onUpdate: (approvers: string[]) => void
  kind: string
}

export default function HoldConfiguration({
  kind,
  onUpdate,
  onDelete,
}: Props) {
  const [approvers, setApprovers] = useState([] as string[])
  const [open, setOpen] = useState(false)

  const addApproverToList = (approver: string) => {
    if (approver && !approvers.find((entry) => entry === approver)) {
      setApprovers([...approvers, approver])
    }
  }

  const onSave = () => {
    setOpen(false)
    onUpdate(approvers)
  }

  return (
    <>
      <PolicyChip value={kind} onDelete={onDelete} onClick={() => setOpen(true)} />
      <Transition.Root show={open} as={Fragment} afterLeave={() => setApprovers([])} >
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
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
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
                              <SearchBox approvers={approvers} onAddApprover={addApproverToList} />
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col justify-top">
                          <div className="divide-y divide-gray-200 px-4 sm:px-6">
                            <div className="space-y-6 pb-5 pt-6">
                              <ul role="list" className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
                                <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                                  <h3 className="text-base font-semibold leading-6 text-gray-900">Approvers</h3>
                                </div>
                                {approvers.map((person) => (
                                  <li key={person} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                                    <div className="flex min-w-0 gap-x-4">
                                      <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person}</p>
                                      </div>
                                    </div>
                                    <button
                                      type="button"
                                      onClick={() => setApprovers(approvers.filter((approver) => approver !== person))}
                                      className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                    >
                                      X
                                    </button>
                                  </li>
                                ))}
                              </ul>
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
