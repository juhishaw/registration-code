import React from 'react'

import { Props } from 'app/utils/helpers'

interface PropsCore {
  children?: React.ReactNode
  className?: string
}

export const SpeedDialHandler = ({
  className='',
  children,
  ...props
}: Props<PropsCore>) => {
  return (
    <div
      className="flex items-center justify-center"
      {...props}
    >
      {children}
    </div>
  )
}
