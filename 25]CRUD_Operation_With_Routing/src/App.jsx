import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Crud_With_Routings/Home'
import About from './Crud_With_Routings/About'
import Contact from './Crud_With_Routings/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about/:name' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
