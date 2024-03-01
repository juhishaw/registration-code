import { type MetaFunction } from '@remix-run/cloudflare'
import { Link, useNavigate } from '@remix-run/react'
import { Fragment, useContext, useState } from 'react'

import { EvaluatedTransferEvent } from 'app/utils/types'
import { classNames } from '~/utils/helpers'
import { BigDecimal } from '~/utils/BigDecimal'
import { TransferActivityContext } from 'app/routes/_authed.policy._log'
import { useAuthContext } from '~/components/authentication/AuthProvider'
import { UserSession } from '~/utils/authentication/session.server'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall" },
    { name: "description", content: "AI Powered Compliance: Transact with Confidence" },
  ]
}

type Day = {
  date: string
  dateTime: string
  transactions: {
    id: string
    network: string
    to: string
    from: string
    value: string
    gas: string
    initiator: string
    status: 'Approved' | 'Needs Approval' | 'Denied'
    approvals: {
      approver: string
      datetime: string
      action: 'Approve' | 'Deny'
    }[]
  }[]
}

const getMostRecent = (events: EvaluatedTransferEvent[]): Day[] => {
  const now = new Date()
  const oneDay = 1000 * 60 * 60 * 24

  const dateSummary = (date: Date) => {
    const today = new Date(now.toISOString().slice(0, 10) + 'T00:00:00.000Z')
    const yesterday = new Date(new Date(now.getTime() - oneDay).toISOString().slice(0, 10) + 'T00:00:00.000Z')
    if (date.getTime() >= today.getTime()) {
      return 'Today'
    } else if (date.getTime() >= yesterday.getTime()) {
      return 'Yesterday'
    }
    return date.toDateString()
  }

  return events
    .sort((a,b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime())
    .reduce((all, item) => {
      const date = dateSummary(new Date(item.datetime))
      let match = all.findIndex((item) => date === item.date)
      if (match === -1) {
        match = all.length
        all.push({
          date,
          dateTime: new Date(item.datetime).toISOString().slice(0, 10),
          transactions: []
        })
      }
      all[match].transactions.push({
        id: item.id,
        network: item.data.network,
        to: item.data.to,
        from: item.data.from,
        value: item.data.value || '0',
        gas: item.data.gasLimit || '0',
        initiator: 'unknown',
        status: item.status === 'Submitted' ? 'Approved' : item.status === 'Needs Approval' ? 'Needs Approval' : 'Denied',
        approvals: !item.approvals ? [] : item.approvals.given.map((approval) => ({
          approver: approval.approver,
          datetime: approval.datetime,
          action: approval.decision === 'approve' ? 'Approve' : 'Deny',
        })),
      })
      return all
    }, [] as Day[])
}

export default function PolicyApprovalsPage() {
  const { getUser } = useAuthContext()
  const user = getUser() as UserSession

  const activity = useContext(TransferActivityContext)
  const navigate = useNavigate()
  const [filter, setFilter] = useState('')

  const filterUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }

  const statuses = {
    Approved: 'text-green-700 bg-green-50 ring-green-600/20',
    Denied: 'text-red-600 bg-red-50 ring-red-500/10',
    'Needs Approval': 'text-yellow-700 bg-yellow-50 ring-yellow-600/10',
  }

  const weiToEth = new BigDecimal('1000000000000000000')

  const filteredActivity = activity
    .filter((event) =>
      event.status === 'Needs Approval' &&
      event.approvals &&
      event.approvals.missing.approvers.find((approver) => approver === user.userId)
    )
    .filter((entry) => entry.data.from.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">Activity Log</h1>
        </div>
      </div>
      <div className="mt-2">
        <input
          onChange={filterUpdate}
          type="text"
          name="search-filter"
          id="search-filter"
          className="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search for an event"
        />
      </div>
      <div className="mt-6 overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Destination</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {getMostRecent(filteredActivity).map((day) => (
                  <Fragment key={day.date}>
                    <tr className="text-sm leading-6 text-gray-900">
                      <th scope="colgroup" colSpan={3} className="relative isolate py-2 font-semibold">
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                        <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50" />
                      </th>
                    </tr>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm font-medium leading-6 text-gray-900">
                                  {((new BigDecimal(transaction.value)).divide(weiToEth)).toString()} {transaction.network}
                                </div>
                                <div
                                  className={classNames(
                                    statuses[transaction.status],
                                    'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                  )}
                                >
                                  {transaction.status}
                                </div>
                              </div>
                              {transaction.gas ? (
                                <div className="mt-1 text-xs leading-5 text-gray-500">Gas: {transaction.gas} {transaction.network}</div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm leading-6 text-gray-900">{transaction.to}</div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">{transaction.initiator} ({transaction.from})</div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <Link
                              to={`../activity/${transaction.id}`}
                              relative="path"
                              className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                              View<span className="hidden sm:inline"> transaction</span>
                              <span className="sr-only">
                                , transaction #{transaction.id}, {transaction.to}
                              </span>
                            </Link>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            {(transaction.status !== 'Needs Approval' && transaction.approvals.length === 0) ?
                              <>Auto-{transaction.status}</> :
                              <>Approvers: <span className="text-gray-900">{transaction.approvals.length}</span></>
                            }
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
