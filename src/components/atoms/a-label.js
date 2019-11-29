import React from 'react'
import PropTypes from 'prop-types'
import './a-label.css'

export default function ALabel (props) {
  return (
    <label
      className={'a-label'}
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
  text: PropTypes.string,
  for: PropTypes.string.isRequired
}