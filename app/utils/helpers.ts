export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export type Props<T> = T & {
  [index: string]: any
}
