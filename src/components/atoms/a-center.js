import React, { useMemo } from 'react'
import { className } from '../utilities'

import './a-center.css'

export default function ACenter (props) {
  const className = useClassName(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

function useClassName (props) {
  return useMemo(
    () => className(['a-center']),
    []
  )
}

