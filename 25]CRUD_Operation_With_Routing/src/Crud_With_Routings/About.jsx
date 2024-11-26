import React from 'react'
import { useParams } from 'react-router-dom'

export default function About() {
  const data = useParams()
  return (
    <div>
      <h1>About</h1>
      <h2>{data.name}</h2>
    </div>
  )
}
