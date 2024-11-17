import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LS_Storage from './LS_storage/LS_Storage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LS_Storage/>
    </>
  )
}

export default App
