import React from 'react'

import { Props, classNames } from 'app/utils/helpers'

interface PropsCore {
  children?: React.ReactNode
  className?: string
}

export const Typography = ({ className, children, ...props }: Props<PropsCore>) => {
  return (
    <p
      className={classNames(
        className || '',
        'block antialiased font-sans font-base font-light leading-relaxed'
      )}
      {...props}
    >
      {children}
    </p>
  )
}
