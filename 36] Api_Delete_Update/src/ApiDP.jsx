import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function ApiDP() {
    const [record,setRecord] = useState([]);
    const [title,setTitle] = useState("");
    const [views,setViews] = useState("");
    const [editID, setEditID] = useState(null);

    useEffect (() => {
        fetchApi();
    },[]);

    const fetchApi = async () => {
        let data = await axios.get("http://localhost:1728/posts");
        console.log(data);
        setRecord(data.data); 
    };

    const addData = async () => {
        if(editID){
            let updatedObj = {
                id: editID,
                title,
                views
            }

            await axios.put (`http://localhost:1728/posts/${editID}`, updatedObj);
            fetchApi();
            setEditID(null);
        }else{
            let obj = {id: String(record.length +1), title, views};

            let sendData = await axios.post("http://localhost:1728/posts", obj);
            setRecord([...record,obj]);
        }
        setTitle("");
        setViews("");
    };

    const deleteData = async (id) => {
        console.log(id);
        let delteRecord = await axios.delete (`http://localhost:1728/posts/${id}`);
        fetchApi();
    };

    const editData = (e) => {
        setEditID(e.id);
        setTitle(e.title);
        setViews(e.views);
    }
    
  return (
    <div>
        <input type="text" placeholder='Enter Title' onChange={(e) => setTitle(e.target.value)} value={title} />
        <input type="number" placeholder='Enter Views' onChange={(e) => setViews(e.target.value)} value={views} />
        <button onClick={addData}>{editID ? "update" : "add"}</button>
        <h1>Api Delete Put</h1>
        {
            record && record.map((e,i) => {
                return <ul key={i}>
                    <li>{e.id}</li>
                    <li>{e.title}</li>
                    <li>{e.views}</li>
                    <li><button onClick={() => editData(e)}>Edit</button></li>
                    <li><button onClick={() => deleteData(e.id)}>Delete</button></li>
                </ul>
            })
        }
    </div>
  )
}
