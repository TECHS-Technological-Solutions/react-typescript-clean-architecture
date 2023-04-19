export type EditableEntity<T extends {id: string | number}> = Partial<
  Omit<T, 'id'>
> &
  Required<Pick<T, 'id'>>

export type Maybe<T> = T | null | undefined
