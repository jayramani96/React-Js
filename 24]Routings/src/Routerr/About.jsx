import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
    let navigate = useNavigate()
    const handleClick = ()=>{
        navigate("/contact")
    }
  return (
    <div>
        <h1>About</h1>
        <button onClick={handleClick}>Go To Contact</button>
    </div>
  )
}
