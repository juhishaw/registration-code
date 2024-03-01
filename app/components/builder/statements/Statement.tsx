import Condition from 'app/components/builder/statements/Condition'
import { Parameters, PolicyItem } from 'app/utils/types'
import AllowAction from 'app/components/builder/actions/AllowAction'
import DenyAction from 'app/components/builder/actions/DenyAction'
import NeedsApprovalAction from 'app/components/builder/actions/NeedsApprovalAction'
import NoAction from 'app/components/builder/actions/NoAction'

interface Props {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

const Statement = ({ id = '', items = [], addItem, onRemove, onUpdate }: Props) => {
  const idRegex = new RegExp(`^${id}[^:]+$`)
  const childItems = items.filter((item) => !!item.id.match(idRegex))

  return (
    <>
      {childItems.map((item, index) => {
        if (item.kind === 'if') {
          return (
            <Condition
              key={index}
              id={item.id + ':'}
              items={items.filter((cur) => cur.id.startsWith(item.id + ':')) || []}
              onRemove={onRemove}
              addItem={addItem}
              onUpdate={onUpdate}
            />
          )
        } else if (item.kind === 'allow') {
          return (<AllowAction key={index} />)
        } else if (item.kind === 'deny') {
          return (<DenyAction key={index} />)
        } else if (item.kind === 'needsApproval') {
          return (<NeedsApprovalAction key={index} />)
        } else if (item.kind === 'nothing') {
          return (<NoAction key={index} />)
        }
        return (<></>)
      })}
    </>
  )
}

export default Statement
