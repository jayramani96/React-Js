import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Firebase/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Firebase/Login'
import Dashboard from './Firebase/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' Component={SignUp}></Route>
      <Route path='/login' Component={Login}></Route>
      <Route path='/dashboard' Component={Dashboard}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
