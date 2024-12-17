import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Width from './WidthCount/Width'
import SignUp from './ReactFirebase/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Width/>
    </>
  )
}

export default App
