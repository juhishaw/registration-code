import { CodeBracketIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

import WithGrouping from 'app/components/builder/statements/WithGrouping'
import { Item } from 'app/components/builder/types'
import { classNames } from 'app/utils/helpers'

const Rule = ({ rule, level=0 }: {rule: Item, level?:number}) => {
  const color = [
    "bg-orange-200/10",
    "bg-orange-200/20",
    "bg-orange-200/40",
    "bg-orange-200/60",
    "bg-orange-200/90",
  ]
  return (
    <div className="p-2 w-full truncate">
      <div className={classNames(color[Math.min(level, color.length-1)], 'border-slate-50 border-0 w-full rounded-lg shadow')}>
        <div className="flex justify-center p-0 m-0 h-11 align-middle rounded-lg w-full">
          <div className={classNames(rule.blockKind === 'action' ? 'bg-orange-400/40' : 'bg-orange-400/10','flex flex-none items-center justify-center rounded-lg h-11 w-11')}>
            {rule.blockKind === 'action' ? 
              <ShieldCheckIcon className="text-white h-8 w-8" aria-hidden="true" /> :
              <CodeBracketIcon className="text-white h-8 w-8" aria-hidden="true" />
            }
          </div>
          <div className="pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left w-full truncate">
            { rule.name }
          </div>
        </div>
          {rule.items.map((item, index) => {
            if (rule.items.length > 0) {
              return (
                <WithGrouping key={index} rule={item} level={level+1} />
              )
            }
            return (
              <Rule key={index} rule={item} level={level+1} />
            )
          })}
      </div>
    </div>
  )
}

export default Rule
