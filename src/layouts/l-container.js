import React, { useMemo } from 'react'
import { classNames } from '../shared'

import './l-container.css'

export default function LContainer (props) {
  const className = useMemo(() => classNames(['a-container']), [])

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}
