import React from 'react'
import AButton from '../components/atoms/a-button'
import './App.css'

function App () {
  return (
    <div>
      Running server!
      <div>
        <AButton variant={'primary'} />
        <AButton />
      </div>
    </div>
  )
}

export default App
