import React from 'react'
import PropTypes from 'prop-types'
import AInput from '../atoms/a-input'
import { useRandomId } from '../utilities'
import AColumns from '../atoms/a-columns'
import ALabel from '../atoms/a-label'
import './m-checkbox.css'

export default function MCheckbox (props) {
  const inputId = useRandomId()

  return (
    <div className={'m-checkbox'}>
      <AColumns
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
      </AColumns>
    </div>
  )
}

MCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}