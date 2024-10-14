import React,{useEffect,useState} from 'react'

export default function Pr_UseEffect() {
    const [num,setNum] = useState(0)

    useEffect(()=>{
        
       console.log('mounting');
    },[num])
  return (
    <div className='M'>
        <h1>Pr_UseEffect</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num-1)}>-</button>
        <button onClick={()=>setNum(0)}><i className="fa-solid fa-arrow-rotate-right"></i></button>
        <button onClick={()=>setNum(num+1)}>+</button>
        
    </div>
  )
}
