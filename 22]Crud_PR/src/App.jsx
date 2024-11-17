import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PR_CRUD from './Pr_crud/PR_CRUD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PR_CRUD/>
    </>
  )
}

export default App
