import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import "./LogIn.css"; // Import the CSS file

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/dashboard", { replace: true });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password" // Better for password inputs
          placeholder="Enter Your Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        <br />
        <Link to="/">Sign Up</Link>
      </div>
    </div>
  );
}
