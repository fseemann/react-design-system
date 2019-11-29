import AButton from '../atoms/a-button'
import AInput from '../atoms/a-input'
import React from 'react'
import './t-components.css'
import ALabel from '../atoms/a-label'
import AHeading from '../atoms/a-heading'

export default function TComponents () {
  return (
    <div className="t-components">
      <AHeading level={1} text={'Components'} />
      <section>
        <AHeading level={2} text={'Atoms'} />
        <section>
          <AHeading level={3} text={'Buttons'} />
          <AButton />
          <AButton variant={'primary'} />
        </section>
        <section>
          <AHeading level={3} text={'Inputs'} />
          <AInput name={'username'} />
        </section>
        <section>
          <AHeading level={3} text={'Labels'} />
          <ALabel for={'some-input-id'} />
        </section>
        <section>
          <AHeading level={3} text={'Headings'}/>
          <AHeading level={1} text={'Heading 1'} />
          <AHeading level={2} text={'Heading 2'} />
          <AHeading level={3} text={'Heading 3'} />
          <AHeading level={4} text={'Heading 4'} />
          <AHeading level={5} text={'Heading 5'} />
          <AHeading level={6} text={'Heading 6'} />
        </section>
      </section>
    </div>
  )
}