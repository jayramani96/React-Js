import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Uncontrolled from './Component/Uncontrolled'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Uncontrolled/>
    </>
  )
}

export default App
