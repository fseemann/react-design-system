import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-heading.css'
import { classNames } from '../../shared'

AHeading.propTypes = {
  level: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  margin: PropTypes.oneOf(['small', 'medium', 'large'])
}

export default function AHeading (props) {
  const HElement = useMemo(() => `h${props.level}`, [props.level])
  const className = useHeadingClass(props)

  return (
    <HElement
      className={className}
    >
      {props.text}
    </HElement>
  )
}

function useHeadingClass (props) {
  return useMemo(
    () => classNames([
      'a-heading',
      `a-heading--${props.level}`,
      props.margin && `a-heading--margin-${props.margin}`
    ]),
    [props.level, props.margin]
  )
}