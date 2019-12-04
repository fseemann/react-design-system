import AButton from '../atoms/a-button'
import AInput from '../atoms/a-input'
import React from 'react'
import './t-components.css'
import ALabel from '../atoms/a-label'
import AHeading from '../atoms/a-heading'
import AStack from '../atoms/a-stack'
import MInput from '../molecules/m-input'
import MCheckbox from '../molecules/m-checkbox'
import AHint from '../atoms/a-hint'
import ARow from '../atoms/a-row'
import ACard from '../atoms/a-card'

export default function TComponents () {
  return (
    <div className="t-components">
      <AHeading
        level={1}
        text={'Components'}
        margin={'large'}
      />
      <AStack>
        <AHeading
          level={2}
          text={'Colors'}
        />
        <ACard color={['#9AE79C']}>
          <AHeading text={'Brand'} level={2} />
          <AHint text={'#9AE79C'} />
        </ACard>
        <ARow>
          <ACard color={['#808080', '#fefefe']}>
            <AHeading text={'Dark grey'} level={2} className="a-hero__title" />
            <AHint text={'#808080'} className="a-hero__description" />
          </ACard>
          <ACard color={['#A9A9A9']}>
            <AHeading text={'Grey'} level={2} className="a-hero__title" />
            <AHint text={'#A9A9A9'} className="a-hero__description" />
          </ACard>
          <ACard color={['#D3D3D3']}>
            <AHeading text={'Light grey'} level={2} className="a-hero__title" />
            <AHint text={'#D3D3D3'} className="a-hero__description" />
          </ACard>
        </ARow>
      </AStack>
      <AStack>
        <AHeading
          level={2}
          text={'Atoms'}
          margin={'medium'}
        />
        <AStack spacing={'small'}>
          <AHeading
            level={3}
            text={'Buttons'}
            margin={'small'}
          />
          <AButton text={'Default'} />
          <AButton
            text={'Primary'}
            variant={'primary'}
          />
        </AStack>
        <AStack spacing={'small'}>
          <AHeading
            level={3}
            text={'Inputs'}
            margin={'small'}
          />
          <AInput
            type={'text'}
            placeholder={'Text'}
            name={'text'}
          />
          <AInput
            type={'password'}
            placeholder={'Password'}
            name={'password'}
          />
          <AInput
            type={'number'}
            placeholder={'Number'}
            name={'number'}
          />
          <AInput
            type={'checkbox'}
            name={'checkbox'}
          />
        </AStack>
        <AStack spacing={'small'}>
          <AHeading
            level={3}
            text={'Labels'}
            margin={'small'}
          />
          <ALabel for={'some-input-id'} />
        </AStack>
        <AStack spacing={'small'}>
          <AHeading
            level={3}
            text={'Headings'}
            margin={'small'}
          />
          <AHeading
            level={1}
            text={'Heading 1'}
          />
          <AHeading
            level={2}
            text={'Heading 2'}
          />
          <AHeading
            level={3}
            text={'Heading 3'}
          />
          <AHeading
            level={4}
            text={'Heading 4'}
          />
          <AHeading
            level={5}
            text={'Heading 5'}
          />
          <AHeading
            level={6}
            text={'Heading 6'}
          />
        </AStack>
        <AHeading
          level={2}
          text={'Molecules'}
        />
        <AStack spacing={'small'}>
          <MInput
            name={'input'}
            label={'Input'}
            hint={'This is your helpful hint.'}
          />
          <MCheckbox
            name={'checked'}
            label={'Checked'}
          />
        </AStack>
      </AStack>
    </div>
  )
}