import React from 'react'

import { Props, classNames } from 'app/utils/helpers'

interface PropsCore {
  children?: React.ReactNode
  className?: string
}

export const SpeedDialAction = ({
  className='',
  children,
  ...props
}: Props<PropsCore>) => {
  return (
    <button
      type="button"
      className={classNames(
        'flex flex-col items-center justify-center rounded-full bg-indigo-600 p-1 justify-center content-center text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
