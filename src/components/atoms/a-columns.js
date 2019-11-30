import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-columns.css'
import { className } from '../utilities'

export default function AColumns (props) {
  const className = useClassName(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

AColumns.propTypes = {
  spacing: PropTypes.oneOf(['small', 'medium', 'large', 'none']).isRequired,
  wrap: PropTypes.oneOf(['none'])
}

AColumns.defaultProps = {
  spacing: 'medium'
}

function useClassName (props) {
  return useMemo(
    () => className([
      'a-columns',
      `a-columns--is-${props.spacing}`,
      props.wrap && `a-columns--wrap-${props.wrap}`
    ]),
    [props.spacing, props.wrap]
  )
}
