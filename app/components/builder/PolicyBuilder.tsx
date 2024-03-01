import { Parameters, PolicyItem } from 'app/utils/types'
import PolicyTrigger from 'app/components/builder/PolicyTrigger'

interface PolicyBuilderProps {
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onBack: () => void
  onForward: () => void
  onUpdate: (item: string, parameters: Parameters) => void
}

export default function PolicyBuilder({items=[], addItem, onRemove, onBack, onForward, onUpdate} : PolicyBuilderProps) {
  return (
    <div className="text-center">
      <div className="border-b border-gray-900/10 pb-12 overscroll-x-auto overflow-x-auto">
        <div className="mt-6">
          <PolicyTrigger
            items={items}
            addItem={addItem}
            onRemove={onRemove}
            onUpdate={onUpdate}
          />
        </div>
      </div>

      <div className="max-w-lg mx-auto mt-6 flex items-center justify-end gap-x-6">
        <button
          onClick={onBack}
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Back
        </button>
        <button
          onClick={onForward}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Next
        </button>
      </div>
    </div>
  )
}
