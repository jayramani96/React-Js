import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Controlledcom from './ControlledCom/Controlledcom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Controlledcom/>
    </>
  )
}

export default App
