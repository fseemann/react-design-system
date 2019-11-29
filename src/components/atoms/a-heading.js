import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-heading.css'

export default function AHeading (props) {
  const HElement = useMemo(() => `h${props.level}`, [props.level])
  const className = useClassName(props)

  return (
    <HElement
      className={className}
    >
      {props.text}
    </HElement>
  )
}

AHeading.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

function useClassName (props) {
  return useMemo(() => `a-heading a-heading--${props.level}`, [props.level])
}
