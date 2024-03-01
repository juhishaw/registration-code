import { useState } from 'react'

import { PolicyDocumentSpeedDial } from 'app/components/PolicyBuilder/PolicyDocumentSpeedDial'
import RuleSet, { PolicyRuleItem } from 'app/components/PolicyBuilder/RuleSet'
import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import { Typography } from 'app/components/Typography'

type PolicyStatementBase = {
  id: number
  kind: string
}

type PolicyStatementElse = PolicyStatementBase & {
  kind: 'else'
  originalItems?: PolicyStatementItem[]
}

type PolicyStatementIf = PolicyStatementBase & {
  kind: 'if'
  originalRuleItems?: PolicyRuleItem[]
  originalItems?: PolicyStatementItem[]
}

export type PolicyStatementItem =
| PolicyStatementBase
| (PolicyStatementBase & { kind: '0' })
| PolicyStatementIf
| PolicyStatementElse

interface PolicyStatementParams {
  level?: number
  originalItems?: PolicyStatementItem[]
}

export default function PolicyStatement({ level = 0, originalItems = [] } : PolicyStatementParams = {}) {
  const [items, setItems] = useState([{ id: 0, kind: '0' }, ...originalItems] as PolicyStatementItem[])
  const [displayIf, setDisplayIf] = useState(!!items.find((item) => item.kind === 'if'))
  const [displayAction, setDisplayAction] = useState(
    items.find((item) => item.kind !== 'if' && item.kind !== 'else' && item.kind !== '0')?.kind || ''
  )
  const [displayElse, setDisplayElse] = useState(!!items.find((item) => item.kind === 'else'))

  const addIf = () => {
    if (!displayIf) {
      setDisplayIf(true)
      items.push({id: items.length+1, kind: 'if'})
    }
  }
  const addElse = () => {
    if (!displayElse) {
      setDisplayElse(true)
      items.push({id: items.length+1, kind: 'else'})
    }
  }
  const addAction = (action?: string) => {
    action = action || ''
    if (!displayAction) {
      setDisplayAction(action)
      items.push({id: items.length+1, kind: action})
    }
  }

  if (level > 10) {
    return (<div></div>)
  }

  const removeItem = (item: {id: number, kind: string}) => {
    if (item.kind === 'if') {
      const elseItem = items.find((cur) => cur.kind === 'else')
      if (elseItem) {
        removeItem(elseItem)
      }
    }
    var index = items.findIndex((cur) => item.id === cur.id)
    if (index !== -1) {
      if (item.kind === 'if') {
        setDisplayIf(false)
      } else if (item.kind === 'else') {
        setDisplayElse(false)
      } else {
        setDisplayAction('')
      }
      items.splice(index, 1)
      setItems([...items])
    }
  }

  return (
    <div className="text-center">
      <div className="mt-6">
        <ul role="list" className="divide-y divide-gray-800 space-y-4">
          {items.map((item) => (
            <li key={item.id} className="py-4 bg-slate-50/25">
              {item.kind === '0' &&
                <PolicyDocumentSpeedDial
                  if={displayIf ? undefined : addIf}
                  action={displayAction !== '' ? undefined : addAction}
                  else={(!displayIf || displayElse) ? undefined : addElse}
                />
              }
              {item.kind === 'if' &&
                <>
                  <PolicyChip value="if" onDelete={() => removeItem(item)} />
                  <RuleSet kind="and" originalRuleItems={(item as PolicyStatementIf).originalRuleItems} />
                  <Typography className="text-slate text-justify font-normal">
                    then
                  </Typography>
                  <PolicyStatement level={level + 1} originalItems={(item as PolicyStatementIf).originalItems} />
                </>
              }
              {item.kind === 'else' &&
                <>
                  <PolicyChip value="else" onDelete={() => removeItem(item)} />
                  <PolicyStatement level={level + 1} originalItems={(item as PolicyStatementElse).originalItems} />
                </>
              }
              {(item.kind !== 'if' && item.kind !== 'else' && item.kind !== '0') &&
                <PolicyChip value={item.kind} onDelete={() => removeItem(item)} />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
