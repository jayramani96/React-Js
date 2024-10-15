import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Function1 from './Component/Function1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Function1/>
    </>
  )
}

export default App
