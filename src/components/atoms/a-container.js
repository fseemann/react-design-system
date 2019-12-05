import React, { useMemo } from 'react'
import { className } from '../utilities'

import './a-container.css'

export default function AContainer (props) {
  const className = useClassName(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

function useClassName (props) {
  return useMemo(
    () => className(['a-container']),
    []
  )
}

