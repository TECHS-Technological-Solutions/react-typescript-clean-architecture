import {createContext, useContext, useMemo, useState} from 'react'
import {noOp} from '@/utils/helpers'
import type {Dispatch, ReactNode, SetStateAction} from 'react'

interface StateShape {
  id: number
  name: string
}

interface ContextShape {
  state: StateShape
  setState: Dispatch<SetStateAction<StateShape>>
}

const SampleContext = createContext<ContextShape>({
  state: {
    id: 0,
    name: '',
  },
  setState: noOp,
})

SampleContext.displayName = 'SampleContext'

export function SampleContextProvider({children}: {children: ReactNode}) {
  const [state, setState] = useState<StateShape>({
    id: 0,
    name: '',
  })

  const value: ContextShape = useMemo(
    () => ({
      state,
      setState,
    }),
    [state],
  )

  return (
    <SampleContext.Provider value={value}>{children}</SampleContext.Provider>
  )
}

export function useSampleContext() {
  return useContext(SampleContext)
}
