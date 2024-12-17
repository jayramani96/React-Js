import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
    const [email,setEmail] = useState("");
    const [passWord,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
      let user = await signInWithEmailAndPassword(auth,email,passWord).then((data) => {
        navigate("/dashboard" , {replace : true});
      })
    }

  return (
    <div>
        <h1>Login</h1>
        <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="text" placeholder='Enter Your PassWord' onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Submit</button>
        <span><Link to={"/"}>Sign Up</Link></span>
    </div>
  )
}
