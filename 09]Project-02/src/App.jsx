import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Pr_UseEffect from './Pr-useEffect/Pr_UseEffect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pr_UseEffect/>
    </>
  )
}

export default App
