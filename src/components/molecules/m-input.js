import React from 'react'
import PropTypes from 'prop-types'
import { AHint, AInput, ALabel } from '../atoms'
import { useRandomId } from '../../shared'
import { LStack } from '../../layouts'

export default function MInput (props) {
  const inputId = useRandomId()
  const hintId = useRandomId()

  return (
    <LStack spacing={'small'}>
      <ALabel
        for={inputId}
        text={props.label}
      />
      <AInput
        id={inputId}
        name={props.name}
        placeholder={props.placeholder}
        describedBy={hintId}
        type={props.type}
      />
      <AHint
        id={hintId}
        text={props.hint}
      />
    </LStack>
  )
}

MInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  hint: PropTypes.string
}