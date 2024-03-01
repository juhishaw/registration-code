import { Switch } from "@headlessui/react"
import { ExclamationCircleIcon } from "@heroicons/react/24/solid"
import { useNavigation } from "@remix-run/react"
import React, { useEffect, useState } from "react"
import { classNames } from "~/utils/helpers"

const policyNameErrorMessage = (value: string) => {
  const minCharacters = 5
  if (value && value.match(/[#:]/)) {
    return (<>Policy name contains invalid characters ( <b>#</b> <b>:</b> ).</>)
  }

  if (!value || value.length < minCharacters) {
    return (<>Policy name must be at least {minCharacters} characters long.</>)
  }

  return undefined
}

const policyVersionErrorMessage = (value: string) => {
  const parts = value.match(
    // eslint-disable-next-line max-len
    /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/
  )
  if (!parts) {
    return (<>Version must follow <i>Semantic Versioning</i> rules (eg <code>1.0.0</code>).</>)
  }
  return undefined
}

const priorityErrorMessage = (value: string) => {
  const parts = value.match(/^[1-9][0-9]*$/)
  if (!parts || Number(value) < 0 || Number(value) > 999999) {
    return (<>Priority must be a number between 1 and 999999.</>)
  }
  return undefined
}

interface SavePolicyFormParams {
  policyName: string
  setPolicyName: (name: string) => void
  policyDescription: string
  setPolicyDescription: (description: string) => void
  policyVersion: string
  setPolicyVersion: (description: string) => void
  onSave: () => void
  onBack: () => void
  errors?: { name?: string, version?: string, document?: string, priority?: string }
  autoConfig: boolean
  setAutoConfig: (autoConfig: boolean) => void
  priority: number
  setPriority: (priority: number) => void
}

export default function SavePolicyForm({
  policyName,
  setPolicyName,
  policyDescription,
  setPolicyDescription,
  policyVersion,
  setPolicyVersion,
  onSave,
  onBack,
  errors,
  autoConfig,
  setAutoConfig,
  priority,
  setPriority,
}: SavePolicyFormParams) {
  const navigation = useNavigation()
  const isSubmitting = navigation.formAction === '/policy/builder'

  const [policyNameError, setPolicyNameError] = useState(undefined as (JSX.Element | undefined))
  const [policyVersionError, setPolicyVersionError] = useState(undefined as (JSX.Element | undefined))
  const [priorityError, setPriorityError] = useState(undefined as (JSX.Element | undefined))

  const inputErrorClasses = 'block w-full rounded-md border-0 py-1.5 pr-10 text-red-900 ring-1 ring-inset ring-red-500 placeholder:text-red-200 focus:ring-2 focus:ring-inset focus:ring-red-500 sm:text-sm sm:leading-6'
  const inputClasses = 'block flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicyName(e.target.value)
    setPolicyNameError(policyNameErrorMessage(e.target.value))
  }

  const updateDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPolicyDescription(e.target.value)
  }

  const updateVersion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPolicyVersion(e.target.value)
    setPolicyVersionError(policyVersionErrorMessage(e.target.value))
  }

  const updatePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriority(Number(e.target.value))
    setPriorityError(priorityErrorMessage(e.target.value))
  }

  const savePolicy = () => {
    if (policyName.length === 0 || policyVersion.length === 0 || !!policyNameError || !!policyVersionError) {
      return
    }
    onSave()
  }

  useEffect(() => {
    if (errors?.name) {
      setPolicyNameError((<>{errors.name}</>))
    }
    if (errors?.version) {
      setPolicyVersionError(<>{errors.version}</>)
    }
    if (errors?.document) {
      onBack()
    }
    if (errors?.priority) {
      setPriorityError(<>{errors.priority}</>)
    }
  }, [errors])

  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <p className="mt-3 text-sm text-left leading-6 text-gray-600">Give your policy a name</p>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="policyName"
                    id="policyName"
                    className={!policyNameError ? inputClasses : inputErrorClasses}
                    placeholder="My New Policy"
                    onChange={updateName}
                    defaultValue={policyName}
                  />
                </div>
                {!!policyNameError &&
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                }
              </div>
              {!!policyNameError &&
                <p className="mt-2 text-sm text-red-600 text-left" id="email-error">
                  {policyNameError}
                </p>
              }
            </div>

            <div className="sm:col-span-4">
              <p className="mt-3 text-sm text-left leading-6 text-gray-600">Give your policy a version</p>
              <div className="relative mt-2 rounded-md shadow-sm">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="policyVersion"
                    id="policyVersion"
                    className={!policyVersionError ? inputClasses : inputErrorClasses}
                    placeholder="1.0.0"
                    onChange={updateVersion}
                    defaultValue={policyVersion}
                  />
                </div>
                {!!policyVersionError &&
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                  </div>
                }
              </div>
              {!!policyVersionError &&
                <p className="mt-2 text-sm text-red-600 text-left" id="email-error">
                  {policyVersionError}
                </p>
              }
            </div>

            <div className="col-span-full">
              <p className="mt-3 text-sm text-left leading-6 text-gray-600">Provide a description to remind yourself how the policy works</p>
              <div className="relative mt-2 rounded-md shadow-sm">
                <textarea
                  id="description"
                  name="description"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={policyDescription}
                  onChange={updateDescription}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <div className="mt-2 md:flex md:items-center md:justify-between">
                <p className="mt-3 text-sm text-left leading-6 text-gray-600">Configure policy at creation</p>
                <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
                  <div className="flex sm:max-w-md">
                    <Switch
                      checked={autoConfig}
                      onChange={setAutoConfig}
                      className={classNames(
                        autoConfig ? 'bg-indigo-600' : 'bg-gray-200',
                        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
                      )}
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        className={classNames(
                          autoConfig ? 'translate-x-5' : 'translate-x-0',
                          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                        )}
                      >
                        <span
                          className={classNames(
                            autoConfig ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                          )}
                          aria-hidden="true"
                        >
                          <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                            <path
                              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        <span
                          className={classNames(
                            autoConfig ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
                          )}
                          aria-hidden="true"
                        >
                          <svg className="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
                            <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                          </svg>
                        </span>
                      </span>
                    </Switch>
                  </div>
                </div>
              </div>
              {autoConfig?
                <>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="priority"
                        id="priority"
                        className={!priorityError ? inputClasses : inputErrorClasses}
                        placeholder="100"
                        onChange={updatePriority}
                        defaultValue={priority}
                      />
                    </div>
                    {!!priorityError &&
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <ExclamationCircleIcon className="h-5 w-5 text-red-500" aria-hidden="true" />
                      </div>
                    }
                  </div>
                  {!!priorityError &&
                    <p className="mt-2 text-sm text-red-600 text-left" id="email-error">
                      {priorityError}
                    </p>
                  }
                </>:<>
                </>
              }
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={onBack}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          disabled={isSubmitting}
        >
          Back
        </button>
        <button
          onClick={savePolicy}
          type="button"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={isSubmitting}
        >
          Save
        </button>
      </div>
    </form>
  )
}
