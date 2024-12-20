import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './FireBase/SignUp'
import LogIn from './FireBase/LogIn'
import DashBoard from './FireBase/DashBoard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' Component={SignUp}></Route>
        <Route path='/login' Component={LogIn}></Route>
        <Route path='/dashboard' Component={DashBoard}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
