import { CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { Parameters, PolicyItem } from 'app/utils/types'
import Statement from 'app/components/builder/statements/Statement'

export interface TriggerProps {
  id?: string
  items?: PolicyItem[]
  addItem: (newItem: PolicyItem | PolicyItem[]) => void
  onRemove: (id: string) => void
  onUpdate: (id: string, parameters: Parameters) => void
}

const TransferTrigger = ({ id = '', items = [], addItem, onRemove, onUpdate }: TriggerProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="overflow-hidden rounded-lg bg-white shadow max-w-lg mx-auto">
        <div className="bg-blue-400/50 flex justify-center p-0 m-0 h-11 align-middle">
          <div className="flex flex-none items-center justify-center rounded-lg bg-blue-400 h-11 w-11">
            <CurrencyDollarIcon className="text-white h-8 w-8" aria-hidden="true" />
          </div>
          <div className="pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold">
            Funds are being Transfered Out
          </div>
        </div>
        {open &&
          <div className="bg-gray-50 px-4 py-5 sm:p-6">{/* Content goes here */}</div>
        }
      </div>
      <Statement id={id} items={items} onRemove={onRemove} addItem={addItem} onUpdate={onUpdate} />
    </>
  )
}

export default TransferTrigger
