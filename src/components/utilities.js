import { useMemo } from 'react'

export function className (classes) {
  return classes.filter(it => it != null).join(' ')
}

export function useRandomId () {
  return useMemo(
    () => Math.random().toString(36).substr(2, 6),
    []
  )
}