import { PlusIcon } from '@heroicons/react/20/solid'
import AddStatement from 'app/components/builder/statements/AddStatement'
import { useState } from 'react'

interface Props {
  onClick: () => void
}

const SingleArrow = ({ onClick }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <AddStatement open={open} setOpen={setOpen} />
      <div className="p-2 flex h-10 justify-center items-start bg-no-repeat bg-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEzIDMwIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMCA1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAsMCBMMTAsNTAiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMnB4IiBmaWxsPSJub25lIiAvPjxwYXRoIGQ9Ik0wLDMwIEwxMCw1MCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIycHgiIGZpbGw9Im5vbmUiIC8+PHBhdGggZD0iTTEwLDUwIEwyMCwzMCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIycHgiIGZpbGw9Im5vbmUiIC8+PC9zdmc+')]">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="border-gray-300 border h-4 w-4 flex rounded-full justify-center items-center bg-slate-300 text-gray-900 shadow-sm hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200"
        >
          <PlusIcon className="h-3 w-3" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}

export default SingleArrow
