import Rule from 'app/components/builder/statements/Rule'
import { Item } from 'app/components/builder/types'

const WithGrouping = ({ rule, level=0 }: {rule: Item, level?: number}) => {
  return (
    <div className="border-l border-0 border-black flex flex-row p-0 m-0">
      <div className="w-2 p-0 m-0 flex flex-col">
        <div className="border-b border-0 border-black grow"></div>
        <div className="border-0 grow"></div>
      </div>
      <Rule rule={rule} level={level} />
    </div>
  )
}

export default WithGrouping
