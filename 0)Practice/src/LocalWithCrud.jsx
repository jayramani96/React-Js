import React, { useEffect, useState } from 'react'

export default function LocalWithCrud() {

    const [name,setName] = useState("");
    const [sub,setSub] = useState("");
    const [city,setCity] = useState("");
    const [record,setRecord] = useState([]);

    const [editIndex,setEditIndex] = useState(null);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("Persons")) || [];
        setRecord(data);
    },[]);

    const handleSubmit = () => {
        if(editIndex == null){
            let obj = {id : Date.now(),name,sub,city};
        setRecord([...record,obj]);
        localStorage.setItem("Persons",JSON.stringify([...record,obj]))
        }else{
            let singleData = record.find((item) => item.id == editIndex);
            singleData.id = editIndex;
            singleData.name = name;
            singleData.sub = sub;
            singleData.city = city;
            localStorage.setItem("Persons",JSON.stringify(record));
        };
        setName("");
        setSub("");
        setCity("");
        setEditIndex(null);
    }

    const handleDelete = (i) => {
        let data = record.filter((item) => item.id != i);
        setRecord(data);
        localStorage.setItem("Persons",JSON.stringify(data));
    };

  return (
    <div>
        <h1>Local Storage With Crud</h1>
        <input type="text" placeholder='Enter Your Name' onChange={(e) => setName(e.target.value)} value={name}/>
        <input type="text" placeholder='Enter Your Subject' onChange={(e) => setSub(e.target.value)} value={sub}/>
        <input type="text" placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} value={city}/>
        <button onClick={handleSubmit}>Submit</button>
        {
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>City</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        record &&
                            record.map((e,i) => {
                                return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.name}</td>
                                    <td>{e.sub}</td>
                                    <td>{e.city}</td>
                                    <td><button onClick={() => handleDelete(e.id)}>Delete</button></td>
                                </tr>
                            })
                    }
                </tbody>
            </table>
        }
    </div>
  )
}
