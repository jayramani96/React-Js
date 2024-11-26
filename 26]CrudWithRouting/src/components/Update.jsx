import React, { useState } from 'react'
import { replace, useNavigate } from 'react-router-dom';

export default function Update({ data, setData }) {

  const [id,setId] = useState();
  const [name,setName] = useState();
  const [subject,setSubject] = useState();

  const navigate = useNavigate();

  const updateData = () => {
    const record = data.find((item) => item.id == id)
    record.id = id,
    record.name = name,
    record.subject = subject
    navigate("/", {replace:true})
  }
  return (
    <div>
      <h1>Update</h1>
      <input type="text" placeholder='Id' onChange={(e) => setId (e.target.value)}/>
      <input type="text" placeholder='Name' onChange={(e) => setName (e.target.value)}/>
      <input type="text" placeholder='Subject' onChange={(e) => setSubject (e.target.value)}/>
      <button onClick={updateData}>Update</button>
    </div>
  )
}
