import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { ActionFunctionArgs, json } from '@remix-run/cloudflare'
import { useActionData, useNavigate, useParams, useSubmit } from '@remix-run/react'
import { useContext } from 'react'

import { TransferActivityContext } from 'app/routes/_authed.policy._log'
import { Chip } from '~/components/Chip'
import { BigDecimal } from '~/utils/BigDecimal'
import { UserSession, requireUser } from '~/utils/authentication/session.server'
import { AddPolicyApprovalResponse, approvePolicy, denyPolicy } from '~/utils/policies/policies.server'
import { EvaluatedTransferEvent } from '~/utils/types'
import { useAuthContext } from '~/components/authentication/AuthProvider'

const colors = {
  Approved: 'green',
  Denied: 'red',
  Error: 'red',
  'Needs Approval': 'yellow',
}

export const action = async ({ request, context }: ActionFunctionArgs) => {
  const eventKinds = ['transaction:transfer','policy:update','policy:create','policy:delete']
  const user = await requireUser(request, context)

  const formData = await request.formData()
  const decision = formData.get('decision')?.toString() || ''
  const eventId = formData.get('eventId')?.toString() || ''
  const eventKind = formData.get('eventKind')?.toString() || ''

  const decisionIsInvalid = (decision !== 'approve' && decision !== 'deny')
  const eventIdIsInvalid = !eventId.match(/^[0-9a-z-]+$/)
  const eventKindIsValid = !eventKinds.find((kind) => kind === eventKind)
  if (decisionIsInvalid || eventIdIsInvalid || eventKindIsValid) {
    return json(
      {
        errors: {
          ...(decisionIsInvalid ? {decision: 'Decision is not valid.'} : {}),
          ...(eventIdIsInvalid ? {eventId: 'Event ID is not valid.'} : {}),
          ...(eventKindIsValid ? {eventKind: 'Event kind is not valid.'} : {}),
        }
      }, 400
    )
  }

  const approvalState = await (decision === 'approve' ? approvePolicy : denyPolicy)(
    user.token, {
    eventId,
    eventKind,
  })
  if (!approvalState) {
    return json({errors: {message: 'Unable to add policy approval.'}}, 403)
  }

  return json(approvalState)
}

export default function ActionPage() {
  const { getUser } = useAuthContext()
  const navigate = useNavigate()
  const submit = useSubmit()
  const params = useParams()
  const activityContext = useContext(TransferActivityContext).find((entry) => entry.id === params.activityId)
  const approvalState = useActionData<typeof action>()
  const user = getUser() as UserSession

  if (!activityContext) {
    return (
      <div>Not Found!</div>
    )
  }

  const activity: EvaluatedTransferEvent & AddPolicyApprovalResponse = {
    ...activityContext,
    ...((!approvalState || (approvalState as unknown as {errors: unknown}).errors) ? {} : approvalState)
  }

  const status = ({
    'Needs Approval': 'Needs Approval',
    'Denied': 'Denied',
    'Submitted': 'Approved',
    'Error': 'Error',
  }[activity.status] || 'Needs Approval') as 'Needs Approval' | 'Denied' | 'Approved' | 'Error'

  const convertToEth = (wei: string) => {
    const weiToEth = new BigDecimal('1000000000000000000')
    return `${((new BigDecimal(wei)).divide(weiToEth)).toString()} ETH`
  }

  const onPolicyApproval = (decision: 'approve' | 'deny') => {
    const formData = {
      decision,
      eventKind: activity.kind,
      eventId: params.activityId || ''
    }
    submit(formData, {method: 'post'})
  }

  return (
    <div>
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a href="#" className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
            <ChevronLeftIcon className="-ml-1 mr-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <button type="button" onClick={()=>navigate(-1)} className="text-sm font-medium text-gray-500 hover:text-gray-700">
                  Activity Log
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRightIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                <button type="button" className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {activity.id}
                </button>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Transaction Details
          </h2>
        </div>
        <div className="mt-4 flex flex-shrink-0 md:ml-4 md:mt-0">
          {(
            activity.status === 'Needs Approval' &&
            activity.approvals &&
            activity.approvals.missing.approvers.find((approver) => approver === user.userId)
          ) ?
            <>
              <button
                type="button"
                onClick={() => onPolicyApproval('deny')}
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              >
                Deny
              </button>
              <button
                type="button"
                onClick={() => onPolicyApproval('approve')}
                className="ml-3 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Approve
              </button>
            </> :
            <></>
          }
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <Chip color={colors[status]} >
                {status}
              </Chip>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Source Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{activity.data.from}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Destination Address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{activity.data.to}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Value</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertToEth(activity.data.value)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Max Priority Fee Per Gas</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertToEth(activity.data.maxPriorityFeePerGas)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Max Fee Per Gas</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {convertToEth(activity.data.maxFeePerGas)}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Gas Limit</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {activity.data.gasLimit} Units
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
