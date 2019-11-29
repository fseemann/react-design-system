import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-heading.css'
import { className } from '../utilities'

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
  text: PropTypes.string.isRequired,
  margin: PropTypes.oneOf(['small', 'medium', 'large'])
}

function useClassName (props) {
  return useMemo(
    () => className([
      'a-heading',
      `a-heading--${props.level}`,
      props.margin && `a-heading--margin-${props.margin}`
    ]),
    [props.level, props.margin]
  )
}