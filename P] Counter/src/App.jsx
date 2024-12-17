import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counterr from './Componenttt/Counterr'
import Arrays from './ArrayOfObject/Arrays'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Counterr/>
    </>
  )
}

export default App
