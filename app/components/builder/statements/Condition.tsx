import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'

import { classNames } from 'app/utils/helpers'
import DecisionPathLines from 'app/components/builder/utils/DecisionPathLines'
import { Item } from 'app/components/builder/types'
import WithGrouping from 'app/components/builder/statements/WithGrouping'
import Yes from 'app/components/builder/statements/Yes'
import No from 'app/components/builder/statements/No'
import SingleArrow from 'app/components/builder/utils/SingleArrow'
import { Parameters, PolicyItem } from 'app/utils/types'
import Rule from 'app/components/builder/statements/Rule'
import { BigDecimal } from '~/utils/BigDecimal'

const ruleToQuestion = (rule: PolicyItem): string => {
  switch (rule.kind) {
    case 'isUserOverTheirSpendingLimit': {
      if (rule.parameters && rule.parameters['spendingLimit']) {
        const weiToEth = new BigDecimal('1000000000000000000')
        const amount = (new BigDecimal(rule.parameters['spendingLimit'].amount).divide(weiToEth)).toString()
        const hours = rule.parameters['spendingLimit'].hours
        return `Is User Transferring more than ${amount} ETH in a ${hours} Hour Period?`
      }
      return `Is User Transferring more than X ETH in a Y Hour Period?`
    }
    case 'isSendingToAddressOnDenyList': {
      return 'Is User Sending to an Address on the Deny List?'
    }
    case 'isSendingToAddressOnAllowList': {
      return 'Is User Sending to an Address on the Allow List?'
    }
    case 'isValueInList': {
      let ruleAsText = 'Is'

      if (rule.parameters && rule.parameters['value']) {
        if (rule.parameters.value['field']) {
          switch (rule.parameters.value.field) {
            case 'to': {
              ruleAsText += ' User Transfering Funds to an Address in'
              break
            } case 'from': {
              ruleAsText += ' User Transfering Funds from a Wallet in'
              break
            }
            default: {
              ruleAsText += ` transaction.${rule.parameters.value.field} in`
              break
            }
          }
        } else if (rule.parameters.value['value']) {
          ruleAsText += ` ${rule.parameters.value.value} in`
        }
      } else {
        ruleAsText += ` [unspecified value] in`
      }

      if (rule.parameters && rule.parameters['list']) {
        if (rule.parameters.list.list) {
          ruleAsText += ` ${JSON.stringify(rule.parameters.list.list)}?`
        } else if (rule.parameters.list.name) {
          ruleAsText += ` ${rule.parameters.list.name} list?`
        }
      } else {
        ruleAsText += ` [unspecified] list?`
      }

      return ruleAsText
    }
    case 'and': {
      return 'all of'
    }
    case 'or': {
      return 'any one of'
    }
    case 'not': {
      return 'none of'
    }
    case 'xor': {
      return 'one and only one of'
    }
  }
  return 'Is Condition Meet?'
}

const ruleToName = (rule: PolicyItem): string => {
  switch (rule.kind) {
    case 'isUserOverTheirSpendingLimit': {
      if (rule.parameters && rule.parameters['spendingLimit']) {
        const weiToEth = new BigDecimal('1000000000000000000')
        const amount = (new BigDecimal(rule.parameters['spendingLimit'].amount).divide(weiToEth)).toString()
        const hours = rule.parameters['spendingLimit'].hours
        return `User is Transferring more than ${amount} ETH in a ${hours} Hour Period`
      }
      return `User is Transferring more than X ETH in a Y Hour Period`
    }
    case 'isSendingToAddressOnDenyList': {
      return 'User is Sending to an Address on the Deny List'
    }
    case 'isSendingToAddressOnAllowList': {
      return 'User is Sending to an Address on the Allow List'
    }
    case 'isValueInList': {
      let ruleAsText = ''

      if (rule.parameters && rule.parameters['value']) {
        if (rule.parameters.value['field']) {
          switch (rule.parameters.value.field) {
            case 'to': {
              ruleAsText += 'User Transfering Funds to an Address is in'
              break
            } case 'from': {
              ruleAsText += 'User Transfering Funds from a Wallet is in'
              break
            }
            default: {
              ruleAsText += `transaction.${rule.parameters.value.field} is in`
              break
            }
          }
        } else if (rule.parameters.value['value']) {
          ruleAsText += `${rule.parameters.value.value} is in`
        }
      } else {
        ruleAsText += `[unspecified value] is in`
      }

      if (rule.parameters && rule.parameters['list']) {
        if (rule.parameters.list.list) {
          ruleAsText += ` ${JSON.stringify(rule.parameters.list.list)}`
        } else if (rule.parameters.list.name) {
          ruleAsText += ` ${rule.parameters.list.name} list`
        }
      } else {
        ruleAsText += ` [unspecified]`
      }

      return ruleAsText
    }
    case 'and': {
      return 'all of'
    }
    case 'or': {
      return 'any one of'
    }
    case 'not': {
      return 'none of'
    }
    case 'xor': {
      return 'one and only one of'
    }
  }
  return 'Condition is Meet'
}

interface Props {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

const policyItemToItem = (policyItem: PolicyItem, items: PolicyItem[]): Item => {
  const item = {
    blockKind:
      policyItem.kind === 'and' ? 'all':
      policyItem.kind === 'or' ? 'any one' :
      policyItem.kind === 'xor' ? 'one and only one' :
      policyItem.kind === 'not' ? 'none' :
      'action',
    name: ruleToName(policyItem),
    asQuestion: ruleToQuestion(policyItem),
    items: []
  } as Item
  const nextId = `${policyItem.id}:`
  const childIdRegex = new RegExp(`^${nextId}[^:]+$`)
  const children = items.filter((next) => !!next.id.match(childIdRegex)).map((next) => policyItemToItem(next, items))
  item.items.push(...children)
  return item
}

const Condition = ({
  id = '',
  items = [],
  addItem,
  onRemove,
  onUpdate,
}: Props) => {
  const [open, setOpen] = useState(false)
  const [idCount, setIdCount] = useState(0)

  const addRule = (rule?: string) => {
    rule = rule || ''
    const newItem = {
      kind: rule,
      id: `${id}${rule}#${idCount}`
    }
    setIdCount(idCount + 1)
    addItem(newItem)
  }

  if (id.split(':').length > 10) {
    return (<div></div>)
  }

  let rules = items.filter((cur) => cur.id.startsWith(id + 'if:')).reduce((all, cur) => {
    const idRegex = new RegExp(`^${id}if:[^:]+$`)
    if (cur.id.match(idRegex)) {
      all.push(policyItemToItem(cur, items))
    }
    return all
  }, [] as Item[])


  if (rules.length > 1) {
    rules = [{
      blockKind: 'all',
      name: 'all of',
      asQuestion: 'all of',
      items: rules,
    }]
  }

  return (
    <>
      <SingleArrow onClick={() => {}} />
      <div className={classNames('border-slate-50 border-0 max-w-xl mx-auto', 'rounded-lg bg-slate-50 shadow')}>
        <div className="bg-stone-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg" onClick={() => setOpen(!open)}>
          <div className="flex flex-none items-center justify-center rounded-lg bg-stone-400 h-11 w-11">
            <QuestionMarkCircleIcon className="text-white h-8 w-8" aria-hidden="true" />
          </div>
          <div className="pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left truncate">
            {(rules.length === 1 && rules[0].items.length === 0) ? rules[0].asQuestion : 'Is Condition Meet?' }
          </div>
        </div>
        {(rules.length > 1 || (rules.length === 1 && rules[0].items.length > 0)) && open &&
          <div className="bg-slate-50 m-0 rounded-lg pb-2">
            {rules.map((item, index) => (
              <Rule key={index} rule={item} />
            ))}
          </div>
        }
      </div>
      <div>
        <DecisionPathLines />
        <div className='items-stretch justify-center flex rounded-lg m-0'>
          <Yes
            id={id + 'then:'}
            items={items.filter((cur) => cur.id.startsWith(id + 'then:')) || []}
            onRemove={onRemove}
            addItem={addItem}
            onUpdate={onUpdate}
          />
          <div className='w-10 shrink-0'></div>
          <No
            id={id + 'else:'}
            items={items.filter((cur) => cur.id.startsWith(id + 'else:')) || []}
            onRemove={onRemove}
            addItem={addItem}
            onUpdate={onUpdate}
          />
        </div>
      </div>
    </>
  )
}

export default Condition

/*
  'is the same as',
  'is different from',
  'is the same as or larger than',
  'is the same as or smaller than',
  'is larger than',
  'is smaller than',
  'includes',
  'does not include',
  'starts with',
  'does not start with',
  'ends with',
  'does not end with',
*/
