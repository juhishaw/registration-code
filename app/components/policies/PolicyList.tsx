import { PlusSmallIcon } from "@heroicons/react/20/solid"
import { useNavigate } from "@remix-run/react"
import { useState } from "react"

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type Policy = {
  id: string
  name: string
  latestVersion: {
    version: string
    createdAt: Date
  }
  category: string
  isConfigured: boolean
}

interface Props {
  policies?: Policy[]
}

const PolicyList = ({ policies = [] }: Props): JSX.Element => {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')

  const filterUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const filteredPolicies = policies.filter((policy) => policy.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Policies</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="ml-auto flex items-center gap-x-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={() => {navigate('/policy/builder')}}
          >
            <PlusSmallIcon className="-ml-1.5 h-5 w-5" aria-hidden="true" />
            Create New Policy
          </button>
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
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle">
            <table className="min-w-full border-separate border-spacing-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                  >
                    Latest Version
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                  >
                    Is Configured
                  </th>
                  <th
                    scope="col"
                    className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                  >
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredPolicies.map((policy, policyIndex) => (
                  <tr key={policy.id}>
                    <td
                      className={classNames(
                        policyIndex !== filteredPolicies.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8'
                      )}
                    >
                      {policy.name}
                    </td>
                    <td
                      className={classNames(
                        policyIndex !== filteredPolicies.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 sm:table-cell'
                      )}
                    >
                      <div className="flex shrink-0 items-center gap-x-6">
                        <div className="hidden sm:flex sm:flex-col sm:items-end">
                          <p className="text-sm leading-6 text-gray-500">{policy.latestVersion.version}</p>
                          <p className="mt-1 text-xs leading-5 text-gray-400">
                            Created on <time dateTime={policy.latestVersion.createdAt.toISOString()}>{policy.latestVersion.createdAt.toDateString()}</time>
                          </p>
                        </div>
                      </div>
                    </td>
                    <td
                      className={classNames(
                        policyIndex !== filteredPolicies.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap hidden px-3 py-4 text-sm text-gray-500 lg:table-cell'
                      )}
                    >
                      {policy.category}
                    </td>
                    <td
                      className={classNames(
                        policyIndex !== filteredPolicies.length - 1 ? 'border-b border-gray-200' : '',
                        'whitespace-nowrap px-3 py-4 text-sm text-gray-500'
                      )}
                    >
                      {policy.isConfigured ? 'Yes' : 'No'}
                    </td>
                    <td
                      className={classNames(
                        policyIndex !== filteredPolicies.length - 1 ? 'border-b border-gray-200' : '',
                        'relative whitespace-nowrap py-4 pr-4 pl-3 text-right text-sm font-medium sm:pr-8 lg:pr-8'
                      )}
                    >
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit<span className="sr-only">, {policy.name}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PolicyList 
