import {
  NoSymbolIcon,
  Bars4Icon,
  ChevronRightIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'

import { PolicyItem } from 'app/utils/types'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

interface PolicyTemplatePickerParams {
  onSubmit: (items: PolicyItem[]) => void
  users: string[]
}

export default function PolicyTemplatePicker({onSubmit, users} : PolicyTemplatePickerParams) {
  const items = [
    {
      title: 'Require Approval for Unknown Addresses',
      description: `Sending funds to an address not on the allow list requires 1 approval.`,
      icon: Bars4Icon,
      background: 'bg-amber-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:isSendingToAddressOnAllowList#1', kind: 'isSendingToAddressOnAllowList', },
        { id: 'if#1:then:nothing#1', kind: 'nothing', },
        { id: 'if#1:else', kind: 'else', },
        { id: 'if#1:else:needsApproval#1', kind: 'needsApproval', parameters: {approvals:{approvals:{approvers:users,required:1}}}},
      ] as PolicyItem[],
    },
    {
      title: 'Require Approval over 2 ETH in 24 Hours',
      description: `Sending more than 2 ETH in 24 Hours requires 2 approvals.`,
      icon: Bars4Icon,
      background: 'bg-amber-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:isUserOverTheirSpendingLimit#1', kind: 'isUserOverTheirSpendingLimit', parameters:{spendingLimit:{amount: '2000000000000000000',hours:24}} },
        { id: 'if#1:then:needsApproval#1', kind: 'needsApproval', parameters: {approvals:{approvals:{approvers:users,required:2}}}},
        { id: 'if#1:else', kind: 'else', },
        { id: 'if#1:else:nothing#1', kind: 'nothing' },
      ] as PolicyItem[],
    },
    {
      title: 'Only Allow Trusted Addresses',
      description: 'Only allow users to send funds to addresses that you know and trust.',
      icon: Bars4Icon,
      background: 'bg-green-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:not#1', kind: 'not', },
        { id: 'if#1:if:not#1:isSendingToAddressOnAllowList#1', kind: 'isSendingToAddressOnAllowList', },
        { id: 'if#1:then:deny#1', kind: 'deny', },
      ] as PolicyItem[],
    },
    {
      title: 'Limit User Spending',
      description: 'Limit funds that can be sent by a user in a 24 hour period.',
      icon: ClockIcon,
      background: 'bg-yellow-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:isUserOverTheirSpendingLimit#1', kind: 'isUserOverTheirSpendingLimit', },
        { id: 'if#1:then:deny#1', kind: 'deny', },
      ] as PolicyItem[], // TODO: Need to add parameters to isUserOverTheirSpendingLimit
    },
    {
      title: 'Block Untrusted Addresses',
      description: `Prevent users from sending funds to addresses you don't trust.`,
      icon: Bars4Icon,
      background: 'bg-pink-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:isSendingToAddressOnDenyList#1', kind: 'isSendingToAddressOnDenyList', },
        { id: 'if#1:then:deny#1', kind: 'deny', },
      ] as PolicyItem[],
    },
    {
      title: 'Block Sanctioned Addresses',
      description: `Prevent users from sending funds to an address on the OFAC list.`,
      icon: NoSymbolIcon,
      background: 'bg-red-500',
      template: [
        { id: 'if#1', kind: 'if', },
        { id: 'if#1:if:isValueInList#1', kind: 'isValueInList', parameters:{value:{field: 'to'}, list:{name:'@web3firewall/ofac'}} },
        { id: 'if#1:then:deny#1', kind: 'deny' },
        { id: 'if#1:else', kind: 'else', },
        { id: 'if#1:else:nothing#1', kind: 'nothing' },
      ] as PolicyItem[],
    },
  ]

  return (
    <div>
    <h2 className="text-base font-semibold leading-6 text-gray-900">Create a Policy</h2>
    <p className="mt-1 text-sm text-gray-500">
      Web3Firewall policies help protect your ass...ets. To start, select a predefined template.
    </p>
    <ul role="list" className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
      {items.map((item, itemIdx) => (
        <li key={itemIdx}>
          <div className="group text-left relative flex items-start space-x-3 py-4">
            <div className="flex-shrink-0">
              <span
                className={classNames(item.background, 'inline-flex h-10 w-10 items-center justify-center rounded-lg')}
              >
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-gray-900">
                <a onClick={() => onSubmit(item.template)} className="cursor-pointer">
                  <span className="absolute inset-0" aria-hidden="true" />
                  {item.title}
                </a>
              </div>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
            <div className="flex-shrink-0 self-center">
              <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </div>
          </div>
        </li>
      ))}
    </ul>
    <div className="mt-4 flex">
      <a onClick={() => onSubmit([])} className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-500">
        Or build a policy from scratch
        <span aria-hidden="true"> &rarr;</span>
      </a>
    </div>
  </div>
  )
}
