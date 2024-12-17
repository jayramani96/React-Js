import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth,db } from '../../firebaseConfig';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    let user = await createUserWithEmailAndPassword(auth,email,password).then(
      (data) => {
        setDoc(doc(db, "Users", data.user.uid),{
          name,city,age,email,
        });
        navigate("/dashboard")
      }
    )
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light" style={{width: '600px'}}>
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: '600px',
          width: '100%',
          borderRadius: '15px',
          backgroundColor: '#1f2b37',
        }}
      >
        <h1 className="text-center text-warning mb-4">Sign Up</h1>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label text-light">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            style={{ backgroundColor: '#2c3e50', color: '#fff', border: '1px solid #555' }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="city" className="form-label text-light">City</label>
          <input
            type="text"
            id="city"
            placeholder="Enter Your City"
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
            style={{ backgroundColor: '#2c3e50', color: '#fff', border: '1px solid #555' }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="age" className="form-label text-light">Age</label>
          <input
            type="text"
            id="age"
            placeholder="Enter Your Age"
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
            style={{ backgroundColor: '#2c3e50', color: '#fff', border: '1px solid #555' }}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label text-light">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            style={{ backgroundColor: '#2c3e50', color: '#fff', border: '1px solid #555' }}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label text-light">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            style={{ backgroundColor: '#2c3e50', color: '#fff', border: '1px solid #555' }}
          />
        </div>
        <button
          onClick={handleSignup}
          className="btn btn-warning w-100 mb-3"
          style={{ fontWeight: 'bold', fontSize: '16px' }}
        >
          Submit
        </button>
        <div className="text-center">
          <span className="text-light">Already have an account? </span>
          <Link to="/login" className="text-warning text-decoration-none fw-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
