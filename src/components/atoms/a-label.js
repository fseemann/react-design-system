import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-label.css'
import { classNames } from '../../shared'

export default function ALabel (props) {
  const className = useLabelClass(props)

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

function useLabelClass (props) {
  return useMemo(() => classNames([
      'a-label',
      props.variant && `a-label a-label--is-${props.variant}`
    ]),
    [props.variant]
  )
}
