import React from 'react'
import './t-components.css'
import { LCenter, LContainer, LRow, LStack } from '../../layouts'
import { MCheckbox, MInput } from '../molecules'
import { AButton, ACard, AHeading, AHint, AInput, ALabel } from '../atoms'

export default function TComponents () {
  return (
    <LContainer>
      <LCenter>
        <AHeading
          level={1}
          text={'Components'}
          margin={'large'}
        />
        <LStack>
          <AHeading
            level={2}
            text={'Colors'}
          />
          <ACard color={['#9AE79C']}>
            <AHeading
              text={'Brand'}
              level={2}
            />
            <AHint text={'#9AE79C'} />
          </ACard>
          <LRow>
            <ACard color={['#808080', '#fefefe']}>
              <AHeading
                text={'Dark grey'}
                level={2}
              />
              <AHint
                text={'#808080'}
              />
            </ACard>
            <ACard color={['#A9A9A9']}>
              <AHeading
                text={'Grey'}
                level={2}
              />
              <AHint
                text={'#A9A9A9'}
              />
            </ACard>
            <ACard color={['#D3D3D3']}>
              <AHeading
                text={'Light grey'}
                level={2}
              />
              <AHint
                text={'#D3D3D3'}
              />
            </ACard>
          </LRow>
        </LStack>
        <LStack>
          <AHeading
            level={2}
            text={'Atoms'}
            margin={'medium'}
          />
          <LStack spacing={'small'}>
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
          </LStack>
          <LStack spacing={'small'}>
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
          </LStack>
          <LStack spacing={'small'}>
            <AHeading
              level={3}
              text={'Labels'}
              margin={'small'}
            />
            <ALabel for={'some-input-id'} />
          </LStack>
          <LStack spacing={'small'}>
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
          </LStack>
          <AHeading
            level={2}
            text={'Molecules'}
          />
          <LStack spacing={'small'}>
            <MInput
              name={'input'}
              label={'Input'}
              hint={'This is your helpful hint.'}
            />
            <MCheckbox
              name={'checked'}
              label={'Checked'}
            />
          </LStack>
        </LStack>
      </LCenter>
    </LContainer>
  )
}