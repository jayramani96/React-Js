import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseReducerr from './Components/UseReducerr'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseReducerr/>
    </>
  )
}

export default App
