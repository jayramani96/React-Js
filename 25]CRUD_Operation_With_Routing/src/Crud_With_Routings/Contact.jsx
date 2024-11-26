import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
  const navigate = useNavigate()
  const obj = {
    name:"sumit",
    subject:"react"
  }
  const handleClick = ()=>{
    navigate("/",{state:obj})
  }
  return (
    <div>
      <h1>Contact</h1>
      <Link to={"/about"}>About</Link>
      <button onClick={handleClick}>Go to home</button>
    </div>
  )
}
