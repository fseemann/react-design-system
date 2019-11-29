import React from 'react'
import PropTypes from 'prop-types'
import './a-hint.css'

export default function AHint (props) {
  return (
    <span
      className={'a-hint'}
      id={props.id}
    >
      {props.text}
    </span>
  )
}

AHint.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string
}