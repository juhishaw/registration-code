import { useState } from 'react'

import { PolicyDocumentSpeedDial } from 'app/components/PolicyBuilder/PolicyDocumentSpeedDial'
import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import { Parameters, PolicyItem } from 'app/utils/types'
import IsUserOverTheirSpendingLimitConfiguration from './rules/IsUserOverTheirSpendingLimitConfiguration'
import IsValueInListConfiguration from './rules/IsValueInListConfiguration'

interface RuleSetParams {
  id?: string
  kind: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  topLevelRemovable?: boolean
  onUpdate: (item: string, parameters: Parameters) => void
}

export default function RuleSet({
  id = '',
  kind,
  items = [],
  addItem,
  onRemove,
  topLevelRemovable = true,
  onUpdate,
} : RuleSetParams) {
  const [idCount, setIdCount] = useState(0)

  const displayAnd = !!items.find((item) => item.id.startsWith(`${id}and#`))
  const displayOr = !!items.find((item) => item.id.startsWith(`${id}or#`))
  const displayNot = !!items.find((item) => item.id.startsWith(`${id}not#`))
  const displayXor = !!items.find((item) => item.id.startsWith(`${id}xor#`))

  const addRule = (rule?: string) => {
    rule = rule || ''
    const newItem = {
      kind: rule,
      id: `${id}${rule}#${idCount}`
    }
    setIdCount(idCount + 1)
    addItem(newItem)
  }

  const idRegex = new RegExp(`^${id}[^:]+$`)
  const childItems = items.filter((item) => !!item.id.match(idRegex))

  return (
    <div className="text-center">
      { !topLevelRemovable &&
        <PolicyChip value={kind} />
      } { topLevelRemovable &&
        <PolicyChip value={kind} onDelete={() => onRemove(id.slice(0, -1))} />
      }
      <div className="mt-6">
        <ul role="list" className="divide-y divide-gray-800 space-y-4">
          <li className="py-4 bg-slate-50/25">
            <PolicyDocumentSpeedDial
              rules={addRule}
              and={displayAnd ? undefined : () => addRule('and')}
              or={displayOr ? undefined : () => addRule('or')}
              not={displayNot ? undefined : () => addRule('not')}
              xor={displayXor ? undefined : () => addRule('xor')}
            />
          </li>
          {childItems.map((item) => (
            <li key={item.id} className="py-4 bg-slate-50/25">
              { item.kind === 'and' &&
                <RuleSet
                  kind="and"
                  id={item.id + ':'}
                  items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
                  onRemove={onRemove}
                  addItem={addItem}
                  onUpdate={onUpdate}
                />
              }
              { item.kind === 'or' &&
                <RuleSet
                  kind="or"
                  id={item.id + ':'}
                  items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
                  onRemove={onRemove}
                  addItem={addItem}
                  onUpdate={onUpdate}
                />
              }
              { item.kind === 'not' &&
                <RuleSet
                  kind="not"
                  id={item.id + ':'}
                  items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
                  onRemove={onRemove}
                  addItem={addItem}
                  onUpdate={onUpdate}
                />
              }
              { item.kind === 'xor' &&
                <RuleSet
                  kind="xor"
                  id={item.id + ':'}
                  items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
                  onRemove={onRemove}
                  addItem={addItem}
                  onUpdate={onUpdate}
                />
              }
              {
                (
                  item.kind === 'isSendingToAddressOnDenyList' ||
                  item.kind === 'isSendingToAddressOnAllowList'
                ) &&
                <>
                  <PolicyChip value={item.kind} onDelete={() => onRemove(item.id)} />
                </>
              }
              {
                (
                  item.kind === 'isUserOverTheirSpendingLimit'
                ) &&
                <IsUserOverTheirSpendingLimitConfiguration
                  kind={item.kind}
                  onDelete={() => onRemove(item.id)}
                  onUpdate={(amount: bigint, hours: number) => onUpdate(item.id, {spendingLimit: {amount: amount.toString(), hours}})}
                />
              }
              {
                (
                  item.kind === 'isValueInList'
                ) &&
                <IsValueInListConfiguration
                  kind={item.kind}
                  onDelete={() => onRemove(item.id)}
                  onUpdate={(value: {value: string} | {field: string}, list: {name: string} | {list: string[]}) => onUpdate(item.id, {value, list})}
                />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
