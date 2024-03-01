import { classNames } from 'app/utils/helpers'

export function Container({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={classNames(
        className || '',
        'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      )}
      {...props}
    />
  )
}
