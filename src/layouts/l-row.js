import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './l-row.css'
import { classNames } from '../shared'
import LRowColumn from './l-row-column'

export default function LRow (props) {
  const className = useRowClass(props)
  const columns = useColumnElements(props)

  return (
    <div className={'a-row'}>
      <div className={className}>
        {columns}
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

function useColumnElements (props) {
  return useMemo(
    () => props.children.map((it, index) =>
      it.type === LRowColumn
        ? it
        : (<LRowColumn key={index}>{it}</LRowColumn>)
    ), [props.children]
  )
}
