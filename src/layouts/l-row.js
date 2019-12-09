import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './l-row.css'
import { classNames } from '../shared'

export default function LRow (props) {
  const className = useRowClass(props)

  return (
    <div className={'a-row'}>
      <div className={className}>
        {props.children}
      </div>
    </div>
  )
}

LRow.propTypes = {
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']),
  wrap: PropTypes.oneOf(['none'])
}

function useRowClass (props) {
  return useMemo(() => classNames([
      'a-row',
      'a-row__a-columns',
      props.spacing && `a-row__a-columns--is-${props.spacing}`,
      props.wrap && `a-row__a-columns--wrap-${props.wrap}`
    ]),
    [props.spacing, props.wrap]
  )
}
