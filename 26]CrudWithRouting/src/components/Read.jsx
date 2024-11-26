import React from 'react'
import {Link} from "react-router-dom"
export default function Read({data}) {
  return (
    <div>
      <h1>Read</h1>
      <Link to="/create">Create</Link>
      <Link to="/delete">Delete</Link>
      <Link to="/update">Update</Link>
      {data &&
        data.map((e,i)=>{
          return <ul key={i} >
            <li>{e.id}</li>
            <li>{e.name}</li>
            <li>{e.subject}</li>
          </ul>
        })
      }
    </div>
  )
}
