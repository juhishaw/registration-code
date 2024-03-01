import { classNames } from 'app/utils/helpers'

const DecisionPathLines = ({ minWidth = 'min-w-[512px]' }: { minWidth?: string }) => {
  return (
    <div className="h-5 items-center justify-center flex flex-row">
      <div className={classNames(minWidth, 'h-5 flex flex-row')}>
        <div className="w-1/2 h-full flex flex-col">
          {/* Box A */}
          <div className="w-full h-1/2 shrink-0"></div>
          {/* Box C */}
          <div className="w-full h-1/2 shrink-0 border-r border-0 border-black"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          {/* Box B */}
          <div className="w-full h-1/2 shrink-0 border-b-2 border-0 border-black"></div>
          {/* Box D */}
          <div className="w-full h-1/2 shrink-0 border-l-2 border-t border-0 border-black"></div>
        </div>
      </div>
      {/* column 2 */}
      <div className="h-5 w-10 shrink-0 flex flex-row">
        <div className="w-1/2 h-full flex flex-col">
          {/* Box A */}
          <div className="w-full h-1/2 shrink-0 border-r-2 border-b-2 border-0 border-black"></div>
          {/* Box C */}
          <div className="w-full h-1/2 shrink-0 border-t border-0 border-black"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          {/* Box B */}
          <div className="w-full h-1/2 shrink-0 border-l border-b-2 border-0 border-black"></div>
          {/* Box D */}
          <div className="w-full h-1/2 shrink-0 border-t border-0 border-black"></div>
        </div>
      </div>
      <div className={classNames(minWidth, 'h-5 flex flex-row')}>
        <div className="w-1/2 h-full flex flex-col">
          {/* Box A */}
          <div className="w-full h-1/2 shrink-0 border-b-2 border-0 border-black"></div>
          {/* Box C */}
          <div className="w-full h-1/2 shrink-0 border-r-2 border-t border-0 border-black"></div>
        </div>
        <div className="w-1/2 h-full flex flex-col">
          {/* Box B */}
          <div className="w-full h-1/2 shrink-0"></div>
          {/* Box D */}
          <div className="w-full h-1/2 shrink-0 border-l border-0 border-black"></div>
        </div>
      </div>
    </div>
  )
}

export default DecisionPathLines
