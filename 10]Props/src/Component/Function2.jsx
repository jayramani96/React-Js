import React, {useState} from 'react'

export default function Function2(props) {
    const[data,setData] = useState(null);

    setTimeout(()=>{
        setData(props.data);
    },5000)

  return (
    <>
    <h1>Function2</h1>

    <div>
       {
        data ? data.map((obj,index)=>(
            <div>
                <h2>{obj.name}</h2>
                <h3>{obj.city}</h3>
            </div>
        )) : <h4>Loading...</h4>
       }
    </div>
    </>
  )
}
