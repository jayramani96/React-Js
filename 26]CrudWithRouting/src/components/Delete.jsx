import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom"

export default function Delete({data,setData}) {

  const [id,setId] = useState();
  const navigate = useNavigate();
  const deleteData = ()=>{
    let record = data.filter(item=>item.id != id)
    setData(record)
    navigate("/")
  }
  return (
    <div>
      <h1>Delete</h1>
      <input type="text" placeholder='Id'  onChange={(e)=>setId(e.target.value)}/>
      <button onClick={deleteData}>Delete</button>
    </div>
  )
}
