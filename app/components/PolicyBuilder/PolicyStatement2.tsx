import { useState } from 'react'

import { PolicyDocumentSpeedDial } from 'app/components/PolicyBuilder/PolicyDocumentSpeedDial'
import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import { Parameters, PolicyItem } from 'app/utils/types'
import IfBlock from './IfBlock'
import HoldConfiguration from './actions/HoldConfiguration'

interface PolicyStatementParams {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

export default function PolicyStatement({ id = '', items = [], addItem, onRemove, onUpdate } : PolicyStatementParams) {
  const [idCount, setIdCount] = useState(0)

  const elseRegex = new RegExp(`^${id}if#[^:]+:else$`)
  const displayIf = !!items.find((item) => item.id.startsWith(`${id}if#`))
  const displayAction = !!items.find((item) => !item.id.startsWith(`${id}if#`) && !item.id.startsWith(`${id}else#`))
  const displayElse = !!items.find((item) => item.id.match(elseRegex))

  const addIf = () => {
    const newItem = [{
      kind: 'if',
      id: `${id}if#${idCount}`
    },{
      kind: 'if-condition',
      id: `${id}if#${idCount}:if`
    },{
      kind: 'if-then',
      id: `${id}if#${idCount}:then`
    }]
    setIdCount(idCount + 1)
    addItem(newItem)
  }
  const addElse = () => {
    const ifItemRegEx = new RegExp(`^${id}if#[^:]+$`)
    const ifItem = items.find((item) => !!item.id.match(ifItemRegEx))
    if (ifItem) {
      const newItem = {
        kind: 'else',
        id: `${ifItem.id}:else`
      }
      addItem(newItem)
    }
  }
  const addAction = (action?: string) => {
    action = action || ''
    const newItem = {
      kind: action,
      id: `${id}${action}#${idCount}`
    }
    setIdCount(idCount + 1)
    addItem(newItem)
  }

  if (id.split(':').length > 10) {
    return (<div></div>)
  }

  const idRegex = new RegExp(`^${id}[^:]+$`)
  const childItems = items.filter((item) => !!item.id.match(idRegex))

  return (
    <div className="text-center">
      <div className="mt-6">
        <ul role="list" className="divide-y divide-gray-800 space-y-4">
          <li className="py-4 bg-slate-50/25">
            <PolicyDocumentSpeedDial
              if={displayIf ? undefined : addIf}
              action={displayAction ? undefined : addAction}
              else={(!displayIf || displayElse) ? undefined : addElse}
            />
          </li>
          {childItems.filter((item) => item.kind === 'if').map((item) => (
            <li key={item.id} className="py-4 bg-slate-50/25">
              <PolicyChip value="if" onDelete={() => onRemove(item.id)} />
              <IfBlock
                id={item.id + ':'}
                items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
                onRemove={onRemove}
                addItem={addItem}
                onUpdate={onUpdate}
              />
            </li>
          ))}
          {childItems.filter((item)=>item.kind !== 'if' && item.kind !== 'else').map((item) => (
            <li key={item.id} className="py-4 bg-slate-50/25">
              {item.kind === 'needsApproval' ?
                <HoldConfiguration
                  kind={item.kind}
                  onUpdate={(approvers: string[]) => onUpdate(item.id, {approvals: {approvals:{approvers, required:2}}})}
                  onDelete={() => onRemove(item.id)}
                /> :
                <PolicyChip value={item.kind} onDelete={() => onRemove(item.id)} />
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
