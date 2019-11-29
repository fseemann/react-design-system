import AButton from '../atoms/a-button'
import AInput from '../atoms/a-input'
import React from 'react'
import './t-components.css'

export default function TComponents (props) {
  return (
    <div className="t-components">
      <h1>Components</h1>
      <section>
        <h2>Atoms</h2>
        <section>
          <h3>Buttons</h3>
          <AButton />
          <AButton variant={'primary'} />
        </section>
        <section>
          <h3>Inputs</h3>
          <AInput name={'username'} />
        </section>
      </section>
    </div>
)
}