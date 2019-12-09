import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../../shared'
import './a-input.css'

export default function AInput (props) {
  const className = useMemo(() => classNames(['a-input']), [])
  const inputValue = useInputValue(props)

  return (
    <input
      className={className}
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      aria-describedby={props.describedBy}
      { ...inputValue }
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

function useInputValue (props) {
  const checkbox = useMemo(() => props.type === 'checkbox', [props.type])

  const [value, setValue] = useState(
    checkbox ? false : ''
  )

  const handleValueChange = useCallback(
    (event) => checkbox ? setValue(event.target.checked) : setValue(event.target.value),
    [checkbox]
  )

  const valueProp = useMemo(
    () => checkbox ? 'checked' : 'value',
    [checkbox]
  )

  return {
    [valueProp]: value,
    onChange: handleValueChange
  }
}