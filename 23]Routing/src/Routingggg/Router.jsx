import React from 'react'
import {Link} from 'react-router-dom'

export default function Router() {
  return (
    <div>
        <h1>Home</h1>
        <Link to={"/About"}>About Page</Link>
    </div>
  )
}
