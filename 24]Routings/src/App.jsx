import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Routerr/Home'
import About from './Routerr/About'
import Contact from './Routerr/Contact'
import Blog from './Routerr/Blog'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
