import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './l-stack.css'
import { classNames } from '../shared'

export default function LStack (props) {
  const className = useStackClass(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

LStack.propTypes = {
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']).isRequired
}

LStack.defaultProps = {
  spacing: 'medium'
}

function useStackClass (props) {
  return useMemo(() => classNames([
      'a-stack',
      `a-stack--is-${props.spacing}`
    ]),
    [props.spacing]
  )
}
