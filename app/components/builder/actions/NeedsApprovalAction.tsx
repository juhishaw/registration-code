import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import SingleArrow from 'app/components/builder/utils/SingleArrow'

const NeedsApprovalAction = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <SingleArrow onClick={() => {}} />
      <div className="overflow-hidden rounded-lg shadow pt-0 p-2">
        <div className="bg-violet-400/50 flex justify-center p-0 m-0 h-11 align-middle rounded-lg">
          <div className="flex flex-none items-center justify-center rounded-lg bg-violet-400 h-11 w-11">
            <HandThumbUpIcon className="text-white h-8 w-8" aria-hidden="true" />
          </div>
          <div className="pl-5 pr-5 h-full flex-grow leading-[2.75rem] text-left font-semibold">
            Pause the Transfer Until Approved
          </div>
        </div>
        {open &&
          <div className="bg-gray-50 px-4 py-5 sm:p-6 rounded-lg">{/* Content goes here */}</div>
        }
      </div>
    </>
  )
}

export default NeedsApprovalAction
