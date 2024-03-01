import { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { CodeBracketIcon, CurrencyDollarIcon, DocumentIcon, ExclamationTriangleIcon, FolderIcon, LifebuoyIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { classNames } from '~/utils/helpers'

const statements = [
  {
    name: 'Conditional Statement',
    description: 'Add a statement that performs different actions depending on the outcome of a conditional check.',
    //render: (props: TriggerProps) => {return (<TransferTrigger {...props} />)},
    color: 'bg-indigo-500',
    icon: CurrencyDollarIcon,
  },
]
const actions = [
  {
    name: 'Stop the Transfer',
    description: 'Rejects the transfer and stops evaluating additional policies.',
    //render: (props: TriggerProps) => {return (<div>Policy Change</div>)},
    color: 'bg-amber-500',
    icon: CodeBracketIcon,
  },
  {
    name: 'Allow the Transfer',
    description: 'Approves the transfer and stops evaluating additional policies.',
    //render: (props: TriggerProps) => {return (<div>User Group Change</div>)},
    color: 'bg-rose-500',
    icon: PhotoIcon,
  },
  {
    name: 'Pause the Transfer until Approval is Given',
    description: 'Puts the transfer into a pending state, until a set of approvers can decide if the transfer should be approved or rejected.',
    //render: (props: TriggerProps) => {return (<div>User Permission Change</div>)},
    color: 'bg-emerald-500',
    icon: DocumentIcon,
  },
  {
    name: 'No Decision',
    description: 'Defer a decision to the next configured policy. If this is the final policy, the transfer will be approved.',
    //render: (props: TriggerProps) => {return (<div>User Permission Change</div>)},
    color: 'bg-emerald-500',
    icon: DocumentIcon,
  },
]

export default function AddStatement({open = false, setOpen}: {open?: boolean, setOpen: (value: boolean) => void}) {
  const [rawQuery, setRawQuery] = useState('')
  const query = rawQuery.toLowerCase().replace(/^[#>]\s+/, '')

  const filteredStatements =
    rawQuery === '#'
      ? statements
      : query === ''
      ? statements.slice(0, 4)
      : rawQuery.startsWith('>')
      ? []
      : statements.filter((statement) => statement.name.toLowerCase().includes(query))

  const filteredActions =
    rawQuery === '>'
      ? actions
      : query === ''
      ? actions.slice(0, 4)
      : rawQuery.startsWith('#')
      ? []
      : actions.filter((action) => action.name.toLowerCase().includes(query))

  return (
    <Transition.Root show={open} as={Fragment} afterLeave={() => setRawQuery('')} appear>
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
              <Combobox onChange={() => {}}>
                <div className="relative">
                  <MagnifyingGlassIcon
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Select a Statement"
                    onChange={(event) => setRawQuery(event.target.value)}
                  />
                </div>

                {(filteredStatements.length > 0 || filteredActions.length > 0) && (
                  <Combobox.Options
                    static
                    className="max-h-80 transform-gpu scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
                  >
                    {filteredStatements.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">Control Statements</h2>
                        <ul className="-mx-4 mt-2 text-sm text-gray-700">
                          {filteredStatements.map((project, index) => (
                            <Combobox.Option
                              key={index}
                              value={project}
                              className={({ active }) =>
                                classNames('flex cursor-default select-none rounded-xl p-3', active ? 'bg-gray-100' : '')
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div
                                    className={classNames(
                                      'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                      project.color
                                    )}
                                  >
                                    <project.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4 flex-auto">
                                    <p
                                      className={classNames(
                                        'text-sm font-medium',
                                        active ? 'text-gray-900' : 'text-gray-700'
                                      )}
                                    >
                                      {project.name}
                                    </p>
                                    <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                      {project.description}
                                    </p>
                                  </div>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                    {filteredActions.length > 0 && (
                      <li>
                        <h2 className="text-xs font-semibold text-gray-900">Actions</h2>
                        <ul className="-mx-4 mt-2 text-sm text-gray-700">
                          {filteredActions.map((action, index) => (
                            <Combobox.Option
                              key={index}
                              value={action}
                              className={({ active }) =>
                                classNames('flex cursor-default select-none rounded-xl p-3', active ? 'bg-gray-100' : '')
                              }
                            >
                              {({ active }) => (
                                <>
                                  <div
                                    className={classNames(
                                      'flex h-10 w-10 flex-none items-center justify-center rounded-lg',
                                      action.color
                                    )}
                                  >
                                    <action.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4 flex-auto">
                                    <p
                                      className={classNames(
                                        'text-sm font-medium',
                                        active ? 'text-gray-900' : 'text-gray-700'
                                      )}
                                    >
                                      {action.name}
                                    </p>
                                    <p className={classNames('text-sm', active ? 'text-gray-700' : 'text-gray-500')}>
                                      {action.description}
                                    </p>
                                  </div>
                                </>
                              )}
                            </Combobox.Option>
                          ))}
                        </ul>
                      </li>
                    )}
                  </Combobox.Options>
                )}

                {rawQuery === '?' && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <LifebuoyIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">Help with searching</p>
                    <p className="mt-2 text-gray-500">
                      Use this tool to quickly search for actions and statements across our entire platform. You can also
                      use the search modifiers found in the footer below to limit the results to just actions or statements.
                    </p>
                  </div>
                )}

                {query !== '' && rawQuery !== '?' && filteredStatements.length === 0 && filteredActions.length === 0 && (
                  <div className="px-6 py-14 text-center text-sm sm:px-14">
                    <ExclamationTriangleIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                    <p className="mt-4 font-semibold text-gray-900">No results found</p>
                    <p className="mt-2 text-gray-500">We couldn’t find anything with that term. Please try again.</p>
                  </div>
                )}

                <div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
                  Type{' '}
                  <kbd
                    className={classNames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('#') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                    )}
                  >
                    #
                  </kbd>{' '}
                  <span className="sm:hidden">for statements,</span>
                  <span className="hidden sm:inline">to access statements,</span>
                  <kbd
                    className={classNames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery.startsWith('>') ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                    )}
                  >
                    &gt;
                  </kbd>{' '}
                  for actions, and{' '}
                  <kbd
                    className={classNames(
                      'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
                      rawQuery === '?' ? 'border-indigo-600 text-indigo-600' : 'border-gray-400 text-gray-900'
                    )}
                  >
                    ?
                  </kbd>{' '}
                  for help.
                </div>
              </Combobox>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
