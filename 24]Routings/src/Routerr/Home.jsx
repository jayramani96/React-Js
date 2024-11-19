import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to="/about">Go To About</Link>
    </div>
  )
}
