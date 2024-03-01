import React, { useContext, useState } from 'react'

import { Props, classNames } from 'app/utils/helpers'
import { SpeedDialMenuOpenContext } from 'app/components/SpeedDial'

interface PropsCore {
  children?: React.ReactNode
  className?: string
}

export const SpeedDialContent = ({
  className='',
  children,
  ...props
}: Props<PropsCore>) => {
  const { open } = useContext(SpeedDialMenuOpenContext)
  return (
    <>
    {open &&
      <div
        className={classNames(className, 'absolute w-full top-16 flex overflow-visible justify-center')}
        {...props}
      >
        {children}
      </div>
    }
    </>
  )
}
