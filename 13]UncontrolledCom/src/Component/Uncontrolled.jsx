import React, {useState,useRef} from 'react'

export default function Uncontrolled() {
    
    const [data,setData] = useState([]);
    const nameRef = useRef();
    const cityRef = useRef();
    const subRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log(nameRef.current.value, cityRef.current.value, subRef.current.value);
        const name = nameRef.current.value;
        const city = cityRef.current.value
        const subject = subRef.current.value
        setData([...data,{name,city,subject}])
        
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
                return  <table border={1} key={i}>
                        <tbody>
                            <tr>
                                <td>name</td>
                                <td>city</td>
                                <td>subject</td>
                            </tr>
                            <tr>
                                <td>{e.name}</td>
                                <td>{e.city}</td>
                                <td>{e.subject}</td>
                            </tr>
                        </tbody>
                    </table>
            }) 
        }
    </div>
  )
}
