import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
      </nav>
      <div>
        
        <h1 className='heading'>React JS</h1>

      </div>
      
    </>
  )
}

export default App
