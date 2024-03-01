'use client'

import { useState } from 'react'

import { PolicyDocumentSpeedDial } from 'app/components/PolicyBuilder/PolicyDocumentSpeedDial'
import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import { Typography } from 'app/components/Typography'

export type PolicyRuleItem = { id: number } & ({
  kind: 'and'
  originalRulesItems?: PolicyRuleItem[]
} | {
  kind: 'or'
  originalRulesItems?: PolicyRuleItem[]
} | {
  kind: 'not'
  originalRulesItems?: PolicyRuleItem[]
} | {
  kind: 'xor'
  originalRulesItems?: PolicyRuleItem[]
} | {
  kind: string
  originalParameters?: Record<string, string>
})

interface RuleSetParams {
  kind: 'and' | 'or' | 'not' | 'xor'
  onDelete?: () => void
  originalRuleItems?: PolicyRuleItem[]
}

export default function RuleSet({ kind, onDelete, originalRuleItems = [] }: RuleSetParams) {
  const [items, setItems] = useState([{ id: 1, kind: '0' }, ...originalRuleItems] as {id:number, kind:string}[])
  const [displayAnd, setDisplayAnd] = useState(false)
  const [displayOr, setDisplayOr] = useState(false)
  const [displayNot, setDisplayNot] = useState(false)
  const [displayXor, setDisplayXor] = useState(false)

  const addRule = (rule?: string) => {
    if (rule === 'and') {
      if (!displayAnd) {
        setItems([...items, {id: items.length+1, kind: rule}])
        setDisplayAnd(true)
      }
    } else if (rule === 'or') {
      if (!displayOr) {
        setItems([...items, {id: items.length+1, kind: rule}])
        setDisplayOr(true)
      }
    } else if (rule === 'not') {
      if (!displayNot) {
        setItems([...items, {id: items.length+1, kind: rule}])
        setDisplayNot(true)
      }
    } else if (rule === 'xor') {
      if (!displayXor) {
        setItems([...items, {id: items.length+1, kind: rule}])
        setDisplayXor(true)
      }
    } else if (rule) {
      setItems([...items, {id: items.length+1, kind: rule}])
    }
  }

  const removeItem = (item: {id: number, kind: string}) => {
    var index = items.findIndex((cur) => item.id === cur.id)
    if (index !== -1) {
      if (item.kind === 'and') {
        setDisplayAnd(false)
      } else if (item.kind === 'or') {
        setDisplayOr(false)
      } else if (item.kind === 'not') {
        setDisplayNot(false)
      } else if (item.kind === 'xor') {
        setDisplayXor(false)
      }
      items.splice(index, 1)
      setItems([...items])
    }
  }

  return (
    <div className="text-center">
      { !onDelete &&
      <Typography className="text-slate text-xs font-normal">
        {kind}
      </Typography>
      } { onDelete &&
        <PolicyChip value={kind} onDelete={onDelete} />
      }
      <div className="mt-6">
        <ul role="list" className="divide-y divide-gray-800 space-y-4">
          {items.map((item) => (
            <li key={item.id} className="py-4 bg-slate-50/25">
              {
                item.kind === '0' &&
                <PolicyDocumentSpeedDial
                rules={addRule}
                and={displayAnd ? undefined : () => addRule('and')}
                or={displayOr ? undefined : () => addRule('or')}
                not={displayNot ? undefined : () => addRule('not')}
                xor={displayXor ? undefined : () => addRule('xor')}
                />
              }
              { item.kind === 'and' && <RuleSet kind="and" onDelete={() => removeItem(item)} /> }
              { item.kind === 'or' && <RuleSet kind="or" onDelete={() => removeItem(item)} /> }
              { item.kind === 'not' && <RuleSet kind="not" onDelete={() => removeItem(item)} /> }
              { item.kind === 'xor' && <RuleSet kind="xor" onDelete={() => removeItem(item)} /> }
              {
                (
                  item.kind === 'isSendingToAddressOnDenyList' ||
                  item.kind === 'isSendingToAddressOnAllowList' ||
                  item.kind === 'isUserOverTheirSpendingLimit'
                ) &&
                <PolicyChip value={item.kind} onDelete={() => removeItem(item)} />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
