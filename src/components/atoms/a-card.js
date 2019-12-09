import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-card.css'

ACard.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

function ACard (props) {
  const style = useMemo(
    () => props.color && { background: props.color[0], color: props.color[1]},
    [props.color]
  )

  return (
    <div
      className={'a-card'}
      style={style}
    >
      {props.children}
    </div>
  )
}

export default ACard