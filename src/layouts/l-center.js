import React, { useMemo } from 'react'
import { classNames } from '../shared'

import './l-center.css'

export default function LCenter (props) {
  const className = useMemo(() => classNames(['a-center']), [])

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}