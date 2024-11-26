import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './components/Read'
import Create from './components/Create'
import Update from './components/Update'
import Delete from './components/Delete'

export default function App() {

  const [students,setStudents]=useState([
    {id:1,name:"sumit",subject:"react"},
    {id:2,name:"rahul",subject:"react"}
  ])

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Read data={students} />} ></Route>
        <Route path='/create' element={<Create data={students} setData={setStudents} />} ></Route>
        <Route path='/update' element={<Update data={students} setData={setStudents} />} ></Route>  
        <Route path='/delete' element={<Delete data={students} setData={setStudents}/>} ></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
