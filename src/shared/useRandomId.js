import { useMemo } from 'react'

export default () => {
  return useMemo(
    () => Math.random().toString(36).substr(2, 6),
    []
  )
}