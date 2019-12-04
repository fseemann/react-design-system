import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-row.css'
import { className } from '../utilities'

export default function ARow (props) {
  const className = useClassName(props)

  return (
    <div className={'a-row'}>
      <div className={className}>
        {props.children}
      </div>
    </div>
  )
}

ARow.propTypes = {
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  wrap: PropTypes.oneOf(['none'])
}

function useClassName (props) {
  return useMemo(
    () => className([
      'a-row',
      'a-row__a-columns',
      props.spacing && `a-row__a-columns--is-${props.spacing}`,
      props.wrap && `a-row__a-columns--wrap-${props.wrap}`
    ]),
    [props.spacing, props.wrap]
  )
}
