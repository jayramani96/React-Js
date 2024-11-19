import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Blog() {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
        <h1>Blog</h1>
        <h1 className='thnk'>THANK YOU</h1>
        <button onClick={handleClick}>Go To Home</button>
    </div>
  )
}
