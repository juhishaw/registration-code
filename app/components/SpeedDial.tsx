import React, { createContext, useState } from 'react'

import { Props, classNames } from 'app/utils/helpers'

interface PropsCore {
  children?: React.ReactNode
  className?: string
  color?: string
}

export const SpeedDialMenuOpenContext = createContext({
  open: false,
  setOpen: (open: boolean) => {},
  color: 'indigo',
})

export const SpeedDial = ({ className='', children, color='', ...props }: Props<PropsCore>) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={classNames('flex items-center justify-center', className)}
      {...props}
    >
      <SpeedDialMenuOpenContext.Provider value={{open,setOpen,color}}>
        <div
          className="w-16 h-16 flex items-center justify-center"
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        >
          {children}
        </div>
      </SpeedDialMenuOpenContext.Provider>
    </div>
  )
}
