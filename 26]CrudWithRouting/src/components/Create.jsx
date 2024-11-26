import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Create({data,setData}) {

  const [name,setName] = useState();
  const [subject,setSubject] = useState();
  const navigate = useNavigate();
  const addData = ()=>{
    setData([...data,{id:data.length + 1, name , subject}])
    navigate("/")
  }
  return (
    <div>
      <h1>Create</h1>
      <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)} />
      <input type="text" placeholder='Subject' onChange={(e)=>setSubject(e.target.value)} />
      <button onClick={addData} >Add Data</button>
    </div>
  )
}
