import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'

export default function AInput (props) {
  const [value, setValue] = useState('')
  const handleValueChange = useCallback(
    (event) => setValue(event.target.value),
    []
  )

  return (
    <input
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      onChange={handleValueChange}
      value={value}
    />
  )
}

AInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

AInput.defaultProps = {
  placeholder: 'Input'
}