import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { PlusIcon } from '@heroicons/react/20/solid'
import { useNavigate } from '@remix-run/react'
import { useState } from 'react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type PolicyConfig = {
  name: string
  version: string
  createdAt: Date
  isEnabled: boolean
  priority: number
  href: string
  isConfigured: boolean
  isDeprecated: boolean
  description: string
}

interface Props {
  configuration?: PolicyConfig[]
  kind: string
}

const PolicyConfiguration = ({ configuration = [], kind }: Props): JSX.Element => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')

  const filterUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const filteredConfiguration = configuration
    .filter((config)=>config.isConfigured)
    .filter((config) => config.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Policy Configuration for {kind}</h1>
        </div>
      </div>
      <div className="mt-2">
        <input
          onChange={filterUpdate}
          type="text"
          name="search-filter"
          id="search-filter"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Find a policy"
        />
      </div>
      <div className="mt-5">
        {
        filteredConfiguration.length === 0 ? (
          <div className="text-center">
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
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No Policies Configured</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by adding a policy.</p>
            <div className="mt-6">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                Add Policy
              </button>
            </div>
          </div>
        ) : ( 
          <ul
            role="list"
            className="divide-y divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl"
          >
            {filteredConfiguration.map((config) => (
              <li key={`${config.name}::${config.version}`} className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6">
                <div className="min-w-0">
                  <div className="flex items-start gap-x-3">
                    <p className="text-sm font-semibold leading-6 text-gray-900">{config.name}</p>
                    <p
                      className={classNames(
                        config.isEnabled ? 'text-green-700 bg-green-50 ring-green-600/20' : 'text-yellow-800 bg-yellow-50 ring-yellow-600/20',
                        'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {config.isEnabled ? 'Enabled' : 'Disabled'}
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p className="whitespace-nowrap truncate">
                      {config.description}
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
                    <p className="whitespace-nowrap">
                      Created on <time dateTime={config.createdAt.toISOString()}>{config.createdAt.toDateString()}</time>
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-x-4">
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">Priority:</p>
                  </div>
                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-900">{config.priority}</p>
                  </div>
                  <ChevronRightIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default PolicyConfiguration 
