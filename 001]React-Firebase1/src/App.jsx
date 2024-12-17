import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './ReactFirebase/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogIn from './ReactFirebase/LogIn'
import Dashbord from './ReactFirebase/Dashbord'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={SignUp}></Route>
        <Route path="/login" Component={LogIn}></Route>
        <Route path="/dashboard" Component={Dashbord}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
