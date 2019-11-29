import React, { useState, useMemo, useCallback } from 'react'
import PropTypes from 'prop-types'
import { className } from '../utilities'
import './a-input.css'

export default function AInput (props) {
  const className = useClassName(props)
  const [value, setValue] = useState('')
  const handleValueChange = useCallback(
    (event) => setValue(event.target.value),
    []
  )

  return (
    <input
      className={className}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      aria-describedby={props.describedBy}
      onChange={handleValueChange}
      value={value}
    />
  )
}

AInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  describedBy: PropTypes.string
}

AInput.defaultProps = {
  placeholder: 'Input'
}

function useClassName (props) {
  return useMemo(
    () => className([
      'a-input'
    ]),
    []
  )
}
