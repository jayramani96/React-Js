import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApiS from './ApiS'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiS/>
    </>
  )
}

export default App
