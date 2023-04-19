import {useState} from 'react'
import {uuid} from '@/utils/helpers'

export function useUniqueId() {
  return useState(uuid)[0]
}
