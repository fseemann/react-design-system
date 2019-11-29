import React from 'react'
import PropTypes from 'prop-types'
import AInput from '../atoms/a-input'
import ALabel from '../atoms/a-label'
import AStack from '../atoms/a-stack'
import AHint from '../atoms/a-hint'
import { useRandomId } from '../utilities'

export default function MInput (props) {
  const inputId = useRandomId()
  const hintId = useRandomId()

  return (
    <AStack spacing={'small'}>
      <ALabel
        for={inputId}
        text={props.label}
      />
      <AInput
        id={inputId}
        name={props.name}
        placeholder={props.placeholder}
        describedBy={hintId}
      />
      <AHint
        id={hintId}
        text={props.hint}
      />
    </AStack>
  )
}

MInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  hint: PropTypes.string
}