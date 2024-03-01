import { json, type LoaderFunctionArgs, type MetaFunction } from '@remix-run/cloudflare'
import { Link, useLoaderData, useNavigate, useSubmit } from '@remix-run/react'
import { getAllTransferActivity } from 'app/utils/activity/activity.server'
import { requireUser, UserSession } from 'app/utils/authentication/session.server'
import { EvaluatedTransferEvent } from 'app/utils/types'
import { Fragment, useState } from 'react'
import { BigDecimal } from 'app/utils/BigDecimal'

import Stats from 'app/components/dashboard/stats'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisHorizontalIcon } from '@heroicons/react/20/solid'
import { useAuthContext } from '~/components/authentication/AuthProvider'

export const meta: MetaFunction = () => {
  return [
    { title: "Web3Firewall" },
    { name: "description", content: "AI Powered Compliance: Transact with Confidence" },
  ]
}

export const loader = async ({ request, context }: LoaderFunctionArgs) => {
  const user = await requireUser(request, context)

  const activity = await getAllTransferActivity(user.token)

  return json(activity)
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

type Stats = ({
  type:'Total'
  name: string
  totals: {
    '24h': { total: string, currency: string }
    '7d': { total: string, currency: string }
    '14d': { total: string, currency: string }
  }
} | {
  type:'Stat'
  name: string
  stats: {
    '24h': { stat: string, previousStat: string, change: string, changeType: string }
    '7d': { stat: string, previousStat: string, change: string, changeType: string }
    '14d': { stat: string, previousStat: string, change: string, changeType: string }
  }
})[]

const secondaryNavigation : {name: string, id: '24h' | '7d' | '14d'}[] = [
  { name: 'Last 24 hours', id: '24h' },
  { name: 'Last 7 days', id: '7d' },
  { name: 'Last 14 days', id: '14d' },
]

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
    .slice(0, 5).reduce((all, item) => {
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

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const weiToEth = new BigDecimal('1000000000000000000')

const getStats = (events: EvaluatedTransferEvent[]): Stats => {
  const now = new Date()
  const oneDay = 1000 * 60 * 60 * 24
  const sevenDays = oneDay * 7
  const fourteenDays = oneDay * 14

  const past1Day = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - oneDay))
  const prev1Day = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - (oneDay*2)) && new Date(event.datetime).getTime() <= (now.getTime() - oneDay))
  const past7Days = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - sevenDays))
  const prev7Days = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - (sevenDays*2)) && new Date(event.datetime).getTime() <= (now.getTime() - sevenDays))
  const past14Days = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - fourteenDays))
  const prev14Days = events.filter((event) => new Date(event.datetime).getTime() >= (now.getTime() - (fourteenDays*2)) && new Date(event.datetime).getTime() <= (now.getTime() - fourteenDays))

  const past1DayBlocked = past1Day.filter((event) => event.status === 'Denied')
  const prev1DayBlocked = prev1Day.filter((event) => event.status === 'Denied')
  const past7DaysBlocked = past7Days.filter((event) => event.status === 'Denied')
  const prev7DaysBlocked = prev7Days.filter((event) => event.status === 'Denied')
  const past14DaysBlocked = past14Days.filter((event) => event.status === 'Denied')
  const prev14DaysBlocked = prev14Days.filter((event) => event.status === 'Denied')

  const etheriumToUsd = new BigDecimal(1539.35)

  const appendZeros = (value: string) => {
    const parts = value.split('.')
    if (parts.length === 1 || parts[1].length === 0) {
      return `${parts[0]}.00`
    } else if (parts[1].length === 1) {
      return `${parts[0]}.${parts[1]}0`
    }
    return `${parts[0]}.${parts[1].slice(0, 2)}`
  }

  const toCurrency = (value: string) => {
    return '$' + appendZeros(Number(value).toLocaleString('en'))
  }

  const toPercentage = (value:string) => {
    const parts = value.split('.')
    if (parts.length === 1) {
      return `${value}%`
    }
    return `${parts[0]}.${parts[1].slice(0, 2)}%`
  }

  const percentageChange = (newValue: number, oldValue: number) => {
    return toPercentage((((newValue - oldValue) * 100) / (oldValue || 1)).toLocaleString('en'))
  }

  return [{
    type: 'Total',
    name: 'Losses Avoided',
    totals: {
      '24h': {
        total: toCurrency(past1Day
          .filter((event)=>event.status==='Denied')
          .reduce((sum, event) => {
            return sum.add((new BigDecimal(event.data.value || '0').divide(weiToEth)).multiply(etheriumToUsd))
          }, new BigDecimal(0)).toString()),
        currency: 'USD',
      },
      '7d': {
        total: toCurrency(past7Days
          .filter((event)=>event.status==='Denied')
          .reduce((sum, event) => {
            return sum.add((new BigDecimal(event.data.value || '0').divide(weiToEth)).multiply(etheriumToUsd))
          }, new BigDecimal(0)).toString()),
        currency: 'USD',
      },
      '14d': {
        total: toCurrency(past14Days
          .filter((event)=>event.status==='Denied')
          .reduce((sum, event) => {
            return sum.add((new BigDecimal(event.data.value || '0').divide(weiToEth)).multiply(etheriumToUsd))
          }, new BigDecimal(0)).toString()),
        currency: 'USD',
      },
    }
  }, {
    type: 'Stat',
    name: 'Transactions',
    stats: {
      '24h': {
        stat: past1Day.length.toString(),
        previousStat: prev1Day.length.toString(),
        change: percentageChange(past1Day.length, prev1Day.length),
        changeType: (past1Day.length >= prev1Day.length) ? 'increase' : 'decrease',
      },
      '7d': {
        stat: past7Days.length.toString(),
        previousStat: prev7Days.length.toString(),
        change: percentageChange(past7Days.length, prev7Days.length),
        changeType: (past7Days.length >= prev7Days.length) ? 'increase' : 'decrease',
      },
      '14d': {
        stat: past14Days.length.toString(),
        previousStat: prev14Days.length.toString(),
        change: percentageChange(past14Days.length, prev14Days.length),
        changeType: (past14Days.length >= prev14Days.length) ? 'increase' : 'decrease',
      },
    }
  }, {
    type: 'Stat',
    name: 'Blocked Transactions',
    stats: {
      '24h': {
        stat: past1DayBlocked.length.toString(),
        previousStat: prev1DayBlocked.length.toString(),
        change: percentageChange(past1DayBlocked.length, prev1DayBlocked.length),
        changeType: (past1DayBlocked.length >= prev1DayBlocked.length) ? 'increase' : 'decrease',
      },
      '7d': {
        stat: past7DaysBlocked.length.toString(),
        previousStat: prev7DaysBlocked.length.toString(),
        change: percentageChange(past7DaysBlocked.length, prev7DaysBlocked.length),
        changeType: (past7DaysBlocked.length >= prev7DaysBlocked.length) ? 'increase' : 'decrease',
      },
      '14d': {
        stat: past14DaysBlocked.length.toString(),
        previousStat: prev14DaysBlocked.length.toString(),
        change: percentageChange(past14DaysBlocked.length, prev14DaysBlocked.length),
        changeType: (past14DaysBlocked.length >= prev14DaysBlocked.length) ? 'increase' : 'decrease',
      },
    }
  }]
}

const statuses = {
  Approved: 'text-green-700 bg-green-50 ring-green-600/20',
  Denied: 'text-red-600 bg-red-50 ring-red-500/10',
  'Needs Approval': 'text-yellow-700 bg-yellow-50 ring-yellow-600/10',
}

export default function Index() {
  const activity: EvaluatedTransferEvent[] = useLoaderData<typeof loader>()
  const navigate = useNavigate()
  const { getUser } = useAuthContext()
  const user = getUser() as UserSession
  const submit = useSubmit()

  const [period, setPeriod] = useState('24h' as '24h' | '7d' | '14d')

  return (
    <>
      <div>
        {/* Secondary navigation */}
        <header className="pb-4 pt-6 sm:pb-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-6 px-4 sm:flex-nowrap sm:px-6 lg:px-8">
            <h1 className="text-base font-semibold leading-7 text-gray-900">Asset Protection</h1>
            <div className="order-last flex w-full gap-x-8 text-sm font-semibold leading-6 sm:order-none sm:w-auto sm:border-l sm:border-gray-200 sm:pl-6 sm:leading-7">
              {secondaryNavigation.map((item) => (
                <button type="button" onClick={() => setPeriod(item.id)} key={item.id} className={(period === item.id) ? 'text-indigo-600' : 'text-gray-700'}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </header>

        <Stats stats={
          getStats(activity).reduce((all: any, cur) => {
            if (cur.type === 'Total') {
              all.push({
                type: 'Total',
                name: cur.name,
                total: cur.totals[period].total,
                currency: cur.totals[period].currency,
              })
            } else {
              all.push({
                type: 'Stat',
                name: cur.name,
                ...cur.stats[period]
              })
            }
            return all
          }, [] as any)
        } />
      </div>

      <div className="space-y-16 py-16 xl:space-y-20">
        {/* Recent activity table */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Recent activity</h2>
            <button type="button" onClick={() => navigate('policy/activity', {relative: 'path'})} className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              View all<span className="sr-only">, activity</span>
            </button>
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
                    {getMostRecent(activity).map((day) => (
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
                                    <div className="mt-1 text-xs leading-5 text-gray-500">Gas: {transaction.gas} Units</div>
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
                                <button
                                  type="button"
                                  onClick={() => navigate(`policy/activity/${transaction.id}`, {relative:'path'})}
                                  className="text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500"
                                >
                                  View<span className="hidden sm:inline"> transaction</span>
                                  <span className="sr-only">
                                    , transaction #{transaction.id}, {transaction.to}
                                  </span>
                                </button>
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


        {/* Recent client list*/}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold leading-7 text-gray-900">Actions Needing Approval</h2>
              <Link to="policy/approvals" relative="path" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                View all<span className="sr-only">, clients</span>
              </Link>
            </div>
            <ul role="list" className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
              {activity.filter((event) => event.status === 'Needs Approval' && event.approvals && event.approvals.missing.approvers.find((approver) => approver === user.userId)).map((event, index) => (
                <li key={index} className="overflow-hidden rounded-xl border border-gray-200">
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" enableBackground="new 0 0 1920 1920" viewBox="0 0 1920 1920">
                      <path d="m959.8 730.9-539.8 245.4 539.8 319.1 539.9-319.1z" opacity=".6"/>
                      <path d="m420.2 976.3 539.8 319.1v-564.5-650.3z" opacity=".45"/>
                      <path d="m960 80.6v650.3 564.5l539.8-319.1z" opacity=".8"/>
                      <path d="m420 1078.7 539.8 760.7v-441.8z" opacity=".45"/>
                      <path d="m959.8 1397.6v441.8l540.2-760.7z" opacity=".8"/>
                    </svg>
                    <div className="text-sm font-medium leading-6 text-gray-900">{event.kind === 'transaction:transfer' ? `Transfer to ${event.data.to.slice(2, 7)} (${event.data.network})` : 'Unknown event'}</div>
                    <Menu as="div" className="relative ml-auto">
                      <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                        <span className="sr-only">Open options</span>
                        <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to={`policy/activity/${event.id}`}
                                relative="path"
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                              >
                                View<span className="sr-only">, {event.id}</span>
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={() => {
                                  const formData = {
                                    decision: 'deny',
                                    eventKind: event.kind,
                                    eventId: event.id || ''
                                  }
                                  submit(formData, {method: 'post', action: `/policy/activity/${event.id}`})
                                }}
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900 w-full text-left'
                                )}
                              >
                                Deny<span className="sr-only">, {event.id}</span>
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Date</dt>
                      <dd className="text-gray-700">
                        <time dateTime={event.datetime}>{new Date(event.datetime).toLocaleDateString()}</time>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      {event.data.amount !== undefined ? <>
                        <dt className="text-gray-500">Amount</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">{event.data.amount}</div>
                        </dd>
                      </> : event.data.policyName !== undefined ?
                      <>
                        <dt className="text-gray-500">Policy</dt>
                        <dd className="flex items-start gap-x-2">
                          <div className="font-medium text-gray-900">{event.data.policyName}</div>
                        </dd>
                      </> : <>
                      </>
                      }
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Missing Approvals</dt>
                      <dd className="flex items-start gap-x-2">
                        <div
                          className={classNames(
                            statuses['Needs Approval'],
                            'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                          )}
                        >
                          {event.approvals?.missing.minimumNeeded}
                        </div>
                      </dd>
                    </div>
                    <div className="flex justify-between gap-x-4 py-3">
                      <dt className="text-gray-500">Already Approved</dt>
                      <dd className="flex items-start gap-x-2">
                        <div
                          className={classNames(
                            statuses['Approved'],
                            'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                          )}
                        >
                          {event.approvals?.given.length}
                        </div>
                      </dd>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}
