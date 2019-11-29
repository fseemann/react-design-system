import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './a-button.css'

export default function AButton (props) {
  const className = useClassName(props)

  return (
    <button
      className={className}
      type={props.type}
    >
      <span>{props.text}</span>
    </button>
  )
}

AButton.propTypes = {
  type: PropTypes.oneOf(['submit', 'reset', 'button']),
  text: PropTypes.string,
  variant: PropTypes.oneOf(['primary'])
}

AButton.defaultProps = {
  type: 'submit',
  text: 'Button'
}

function useClassName (props) {
  return useMemo(() => {
    let className = 'a-button'

    if (props.variant === 'primary')
      className += ' a-button--primary'

    return className
  }, [props.variant])
}
