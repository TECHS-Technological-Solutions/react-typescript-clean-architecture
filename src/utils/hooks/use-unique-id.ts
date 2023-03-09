import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

export function useUniqueId() {
  return useState(() => uuidv4())[0]
}
