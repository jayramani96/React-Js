import React from 'react'
import { useState } from 'react'

export default function DynamicFormCom() {

    const [cat,setCat] = useState("");
    
    const [name,setName] = useState("");
    const [pass,setPass] = useState("");
    const [mail,setMail] = useState("");
    const [phoneNumber,setPhoneNumber] = useState("");

    const [error,setError] = useState("");

    const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!phoneRegex.test(phoneNumber)){
            setError("Phone Number is incorrect")
        }else{
            setError("")
        }
    }

  return (
    <div>
        <h1>Dynamic Form Component</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder='Enter your Name' onChange={(e) => setName(e.target.value)} />
                <input type="password" placeholder='Enter your Password' onChange={(e) => setPass(e.target.value)} />
                <input type="email" placeholder='Enter your Email' onChange={(e) => setMail(e.target.value)}/>
                <input type="text" placeholder='Enter your Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} />
                
                {error && <span style={{ color: "red" }}>{error}</span>}

                <select onChange={(e) => SecurityPolicyViolationEvent(e.target.value)}>
                    <option hidden>Category</option>
                    <option value={"clothes"}>Cloths</option>
                    <option value={"shoes"}>Shoes</option>
                    <option value={"electronics"}>Electronics</option>
                </select>
                
                {cat == "clothes" && <input type="text" placeholder='Enter Return period'/>}

                <button type='submit'>Submit</button>

            </form>
    </div>
  )
}
