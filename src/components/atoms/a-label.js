import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-label.css'
import { className } from '../utilities'

export default function ALabel (props) {
  const className = useClassName(props)

  return (
    <label
      className={className}
      htmlFor={props.for}
    >
      {props.text}
    </label>
  )
}

ALabel.defaultProps = {
  text: 'Label',
}

ALabel.propTypes = {
  for: PropTypes.string.isRequired,
  text: PropTypes.string,
  variant: PropTypes.oneOf(['light'])
}

function useClassName (props) {
  return useMemo(() => className([
      'a-label',
      props.variant && `a-label a-label--is-${props.variant}`
    ]),
    [props.variant]
  )
}
