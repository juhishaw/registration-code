import PolicyStatement from 'app/components/PolicyBuilder/PolicyStatement2'
import { PolicyChip } from 'app/components/PolicyBuilder/PolicyChip'
import RuleSet from 'app/components/PolicyBuilder/RuleSet2'
import { Parameters, PolicyItem } from 'app/utils/types'

interface IfBlockParams {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

export default function IfBlock({
  id = '',
  items = [],
  addItem,
  onRemove,
  onUpdate,
} : IfBlockParams) {
  return (
    <div className="text-center">
      <div className="mt-6">
        <ul role="list" className="divide-y divide-gray-800 space-y-4">
          <li className="py-4 bg-slate-50/25">
            <RuleSet
              kind="and"
              id={id + 'if:'}
              items={items.filter((cur) => cur.id.startsWith(id + 'if:')) || []}
              onRemove={onRemove}
              addItem={addItem}
              topLevelRemovable={false}
              onUpdate={onUpdate}
            />
          </li>
          <li className="py-4 bg-slate-50/25">
            <PolicyChip value="then" />
            <PolicyStatement
              id={id + 'then:'}
              items={items.filter((cur) => cur.id.startsWith(id + 'then:')) || []}
              onRemove={onRemove}
              addItem={addItem}
              onUpdate={onUpdate}
            />
          </li>
          {!!items.find((cur) => cur.id === `${id}else`) &&
            <>
              <PolicyChip value="else" onDelete={() => onRemove(id + 'else')} />
              <PolicyStatement
                id={id + 'else:'}
                items={items.filter((cur) => cur.id.startsWith(id + 'else:')) || []}
                onRemove={onRemove}
                addItem={addItem}
                onUpdate={onUpdate}
              />
            </>
          }
        </ul>
      </div>
    </div>
  )
}
