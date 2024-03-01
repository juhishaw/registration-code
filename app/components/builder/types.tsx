export type Item = {
  blockKind: 'all' | 'any one' | 'one and only one' | 'none' | 'action'
  name: string
  asQuestion: string
  items: Item[]
}
