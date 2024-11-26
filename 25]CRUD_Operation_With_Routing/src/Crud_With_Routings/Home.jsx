import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  let data = useLocation()
  let name = "jay"
  return (
    <div>
      <h1>Home</h1>
      <h2>{data?.state?.name}</h2>
      <h2>{data?.state?.subject}</h2>
      <Link to={`/about/${name}`} >About</Link>
      <Link to={`/contact`} >Contact</Link>
    </div>
  )
}
