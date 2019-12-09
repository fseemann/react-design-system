import React from 'react'
import PropTypes from 'prop-types'
import { AInput, ALabel } from '../atoms'
import { useRandomId } from '../../shared'
import { LRow } from '../../layouts'
import './m-checkbox.css'

export default function MCheckbox (props) {
  const inputId = useRandomId()

  return (
    <div className={'m-checkbox'}>
      <LRow
        spacing={'small'}
        wrap={'none'}
      >
        <AInput
          id={inputId}
          name={props.name}
          placeholder={props.placeholder}
          type={'checkbox'}
        />
        <ALabel
          variant={'light'}
          for={inputId}
        />
      </LRow>
    </div>
  )
}

MCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}