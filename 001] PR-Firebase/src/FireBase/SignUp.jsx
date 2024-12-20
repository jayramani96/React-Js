import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { setDoc } from 'firebase/firestore/lite';
import { doc } from 'firebase/firestore';
import "./SignUp.css"; 

export default function SignUp() {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            let user = await createUserWithEmailAndPassword(auth, email, password).then((data) => {
                setDoc(doc(db, 'Users', data.user.uid), {
                    name,
                    city,
                    age,
                    email,
                });
                navigate('/dashboard');
            });
        } catch (error) {
            console.error('Error during sign-up:', error.message);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Enter Your City"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                />
                <input
                    type="text"
                    placeholder="Enter Your Age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button onClick={handleSubmit}>Submit</button>
                <br />
                <Link to="/login">Log In</Link>
            </div>
        </div>
    );
}
