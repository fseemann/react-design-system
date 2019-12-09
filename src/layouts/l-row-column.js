import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { classNames } from '../shared'

import './l-row-column.css'

LRowColumn.propTypes = {
  size: PropTypes.oneOf(['narrow', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}

function LRowColumn (props) {
  const className = useColumnClass(props)

  return (
    <div className={className}>
      {props.children}
    </div>
  )
}

function useColumnClass (props) {
  return useMemo(
    () => classNames([
      'l-row-column',
      props.size && `l-row-column--is-${props.size}`
    ]),
    [props.size]
  )
}

export default LRowColumn