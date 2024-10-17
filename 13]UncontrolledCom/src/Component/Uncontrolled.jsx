import React, {useState,useRef} from 'react'

export default function Uncontrolled() {
    
    const [data,setData] = useState([]);
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(nameRef.current.value, cityRef.current.value, subRef.current.value);
        setData([...data, nameRef.current.value, cityRef.current.value, subRef.current.value])
        
    }

  return (
    <div>
        <h1>Uncontrolled Component</h1>
        <form onSubmit={(e)=> handleSubmit(e)}>
            <input type="text" placeholder='Enter Your Name' ref={nameRef}/>
            <input type="text" placeholder='Enter Your City' ref={cityRef}/>
            <input type="text" placeholder='Enter Your Subject' ref={subRef}/>
            <button type="submit">Submit</button>
        </form>
        {
            data.map((e,i) => {
                return <p key={i}>{e}</p>
            }) 
        }
    </div>
  )
}
