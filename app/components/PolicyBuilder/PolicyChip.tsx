import { Chip } from 'app/components/Chip'

type DeleteCallback = () => void

interface PolicyChipParams {
  value: string
  onDelete?: DeleteCallback
  onClick?: DeleteCallback
  color?: string
}

export function PolicyChip({ value, onDelete, onClick, color } : PolicyChipParams) {
  return (
    <div className="flex gap-2" onClick={onClick}>
      <Chip className="align-text-middle normal-case" variant="ghost" value={value} onClose={onDelete} color={color || 'indigo'}>
        {value}
      </Chip>
    </div>
  )
}
