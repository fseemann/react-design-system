import React from 'react'
import ACenter from '../atoms/a-center'
import AStack from '../atoms/a-stack'
import ACard from '../atoms/a-card'
import AHeading from '../atoms/a-heading'
import MInput from '../molecules/m-input'
import AButton from '../atoms/a-button'

TLogin.propTypes = {}

function TLogin (props) {
  return (
    <ACenter>
      <ACard>
        <AStack>
          <AHeading
            level={1}
            text={'Login'}
          />
          <MInput
            label={'Username'}
            name={'username'}
            placeholder={'Username'}
            hint={'This is your email address.'}
          />
          <MInput
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <AButton
            text={'Sign in'}
            variant={'primary'}
          />
        </AStack>
      </ACard>
    </ACenter>
  )
}

export default TLogin