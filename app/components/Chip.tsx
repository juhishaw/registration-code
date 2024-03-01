import React from 'react'

import { Props, classNames } from 'app/utils/helpers'

interface PropsCore {
  children?: React.ReactNode
  className?: string
  color?: string
}

const colorsClasses : Record<string, string> = {
  'indigo': 'bg-indigo-50 text-indigo-700 ring-indigo-700/10',
  'red': 'bg-red-50 text-red-700 ring-red-600/10',
  'green': 'bg-green-50 text-green-700 ring-green-600/10',
  'blue': 'bg-blue-50 text-blue-700 ring-blue-700/10',
  'purple': 'bg-purple-50 text-purple-700 ring-purple-700/10',
  'pink': 'bg-pink-50 text-pink-700 ring-pink-700/10',
  'yellow': 'bg-yellow-50 text-yellow-800 ring-yellow-600/10',
}
const closeColorClasses : Record<string, string> = {
  'indigo': 'stroke-indigo-600/50 group-hover:stroke-indigo-600/75',
  'red': 'stroke-red-600/50 group-hover:stroke-red-600/75',
  'green': 'stroke-green-600/50 group-hover:stroke-green-600/75',
  'blue': 'stroke-blue-600/50 group-hover:stroke-blue-600/75',
  'purple': 'stroke-purple-600/50 group-hover:stroke-purple-600/75',
  'pink': 'stroke-pink-600/50 group-hover:stroke-pink-600/75',
  'yellow': 'stroke-yellow-600/50 group-hover:stroke-yellow-600/75',
}
const closeButtonClasses: Record<string, string> = {
  'indigo': 'hover:bg-indigo-600/20',
  'red': 'hover:bg-red-600/20',
  'green': 'hover:bg-green-700/20',
  'blue': 'hover:bg-blue-700/20',
  'purple': 'hover:bg-purple-600/20',
  'pink': 'hover:bg-pink-700/20',
  'yellow': 'hover:bg-yellow-700/20',
}

export const Chip = ({ children, color='indigo', className, ...props }: Props<PropsCore>) => {
  return (
    <span className={classNames(
      className || '',
      colorsClasses[color] || '',
      'inline-flex items-center rounded-md px-2 py-1 text-sm font-medium ring-1 ring-inset'
    )} {...props}>
      {children}
      {props.onClose &&
        <button onClick={props.onClose} type="button" className={classNames(closeButtonClasses[color] || '', 'group relative -mr-1 h-5 w-5 rounded-sm')}>
          <span className="sr-only">Remove</span>
          <svg viewBox="0 0 14 14" className={classNames(closeColorClasses[color] || '','h-5 w-5')}>
            <path d="M4 4l6 6m0-6l-6 6" />
          </svg>
          <span className="absolute -inset-1" />
        </button>
      }
    </span>
  )
}
