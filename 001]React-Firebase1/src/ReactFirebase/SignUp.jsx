import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { auth,db, provider } from '../../firebaseConfig';
import { data, Link, Navigate, useNavigate } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

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
          name,city,age,email,imgUrl:"user.jpg",
        });
        navigate("/dashboard")
      }
    )
  };

  const handleGoogleSignUp = async () => {
    await signInWithPopup(auth , provider).then(data => {
      console.log(data);
      setDoc(doc(db,"Users",data.user.uid),{
        name: data.user.displayName,
        city: "rajkot",
        email: data.user.email,
        age: 19,
        imgUrl:data.user.photoURL,
      })
      navigate("/dashboard")

    }) 
  }

  return (
    <div className=" d-flex justify-content-center align-items-center min-vh-100 bg-dark text-dark" style={{width: '100%'}}>
  <div
    className="card shadow-lg p-4"
    style={{
      maxWidth: '600px',
      width: '100%',
      borderRadius: '15px',
      backgroundColor: '#f7f9fc', // Light background for the card
    }}
  >
    <h1 className="text-center text-primary mb-4">Sign Up</h1>
    <div className="form-group mb-3">
      <label htmlFor="name" className="form-label text-dark">Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        style={{ backgroundColor: '#e9ecef', color: '#000', border: '1px solid #ced4da' }}
      />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="city" className="form-label text-dark">City</label>
      <input
        type="text"
        id="city"
        placeholder="Enter Your City"
        onChange={(e) => setCity(e.target.value)}
        className="form-control"
        style={{ backgroundColor: '#e9ecef', color: '#000', border: '1px solid #ced4da' }}
      />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="age" className="form-label text-dark">Age</label>
      <input
        type="text"
        id="age"
        placeholder="Enter Your Age"
        onChange={(e) => setAge(e.target.value)}
        className="form-control"
        style={{ backgroundColor: '#e9ecef', color: '#000', border: '1px solid #ced4da' }}
      />
    </div>
    <div className="form-group mb-3">
      <label htmlFor="email" className="form-label text-dark">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        style={{ backgroundColor: '#e9ecef', color: '#000', border: '1px solid #ced4da' }}
      />
    </div>
    <div className="form-group mb-4">
      <label htmlFor="password" className="form-label text-dark">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        style={{ backgroundColor: '#e9ecef', color: '#000', border: '1px solid #ced4da' }}
      />
    </div>
    <button
      onClick={handleSignup}
      className="btn btn-primary w-100 mb-3"
      style={{ fontWeight: 'bold', fontSize: '16px' }}
    >
      Submit
    </button>
    <div className="text-center">
      <span className="text-dark">Already have an account? </span>
      <Link to="/login" className="text-primary text-decoration-none fw-bold">
        Login
      </Link>
      <button
        onClick={handleGoogleSignUp}
        className="btn btn-outline-primary w-100 mt-3"
        style={{ fontWeight: 'bold', fontSize: '16px' }}
      >
        Sign In with Google
      </button>
    </div>
  </div>
</div>

  );
}
