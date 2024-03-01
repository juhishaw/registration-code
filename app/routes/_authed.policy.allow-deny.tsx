import { ActionFunctionArgs, json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/cloudflare'
import { Outlet, useLoaderData, useNavigate } from '@remix-run/react'

import { requireUser } from 'app/utils/authentication/session.server'
import { Category, getAllowDenyList } from 'app/utils/account/account.server'
import { useState } from 'react'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall - Allow Deny List" },
  ]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)

  const allowDenyList = await getAllowDenyList(user.token)
  const addressList: {address: string, allowed: boolean, category: Category}[] = []
  allowDenyList.allowList.forEach((address) => {
    addressList.push({address, allowed: true, category: 'None'})
  })
  allowDenyList.denyList.forEach((address) => {
    addressList.push({address: address.address, allowed: false, category: address.category})
  })

  return json({addresses: addressList})
}

export const action = async ({ request }: ActionFunctionArgs) => {
  return json({})
}

export default function AllowDenyListPage() {
  const {addresses} = useLoaderData<typeof loader>()
  const [filter, setFilter] = useState('')
  const navigate = useNavigate()

  const filterUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const filteredPolicies = addresses.filter((address) => {
    const foundMatch = {
      allow: undefined as (boolean | undefined),
      deny: undefined as (boolean | undefined),
      category: undefined as (boolean | undefined),
      notCategory: undefined as (boolean | undefined),
      address: undefined as (boolean | undefined),
    }
    const lowerFilter = filter.toLowerCase()
    const filterParts = lowerFilter.split(' ')
    filterParts.forEach((part) => {
      if (
        part === 'rule:'.substring(0, part.length) ||
        (part.length > 2 && part === 'category:'.substring(0, part.length))
      ) {
        // reserve judgement until the user finishes typing
      } else if (part.startsWith('rule:a')) {
        foundMatch.allow = address.allowed
      } else if (part.startsWith('rule:d')) {
        foundMatch.deny = !address.allowed
      } else if (part.startsWith('category:')) {
        foundMatch.category = foundMatch.category || !!address.category.toLowerCase().startsWith(part.substring('category:'.length))
      } else if (part.startsWith('-category:')) {
        foundMatch.notCategory = foundMatch.notCategory || !!address.category.toLowerCase().startsWith(part.substring('-category:'.length))
      } else {
        foundMatch.address = foundMatch.address || address.address.toLowerCase().includes(part)
      }
    })
    return ((foundMatch.allow === true || foundMatch.deny === true) || (foundMatch.allow === undefined && foundMatch.deny === undefined)) && foundMatch.address !== false && foundMatch.category !== false && foundMatch.notCategory !== true
  })

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Allowed and Denied Addresses</h1>
          <p className="mt-2 text-sm text-gray-700">
            The list of addresses that are configured for the account.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={() => navigate('new', {relative:'route'})}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add New Address
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
          placeholder="Find an address"
        />
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Address
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Rule
                  </th>
                  <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Category
                  </th>
                  <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Remove</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPolicies.map((address, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                      {address.address}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{address.allowed?'Allow':'Deny'}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{address.category}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Remove<span className="sr-only">, {address.address}</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
