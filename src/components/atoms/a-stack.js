import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-stack.css'
import { className } from '../utilities'

export default function AStack (props) {
  const className = useClassName(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

AStack.propTypes = {
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']).isRequired
}

AStack.defaultProps = {
  spacing: 'medium'
}

function useClassName (props) {
  return useMemo(
    () => className([
      'a-stack',
      `a-stack--is-${props.spacing}`
    ]),
    [props.spacing]
  )
}
