import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { Parameters, PolicyItem } from 'app/utils/types'
import Statement from 'app/components/builder/statements/Statement'


interface Props {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

const Yes = ({ id = '', items = [], addItem, onRemove, onUpdate }: Props) => {
  return (
    <div className="flex">
      <div className="border-slate-50 border-0 min-w-[512px] rounded-lg bg-green-50 shadow">
        <div className="bg-green-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg">
          <div className="flex flex-none items-center justify-center rounded-lg bg-green-400 h-11 w-11">
            <CheckCircleIcon className="text-white h-8 w-8" aria-hidden="true" />
          </div>
          <div className="pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left truncate">
            Yes
          </div>
        </div>
        <Statement id={id} items={items} onRemove={onRemove} addItem={addItem} onUpdate={onUpdate} />
      </div>
    </div>
  )
}

export default Yes
