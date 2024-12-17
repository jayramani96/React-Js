import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);

      setName('');
      setCity('');
      setAge('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error during sign-up:', error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow p-4" style={{ maxWidth: '800px', width: '100%' }}>
        <h1 className="text-center mb-4 text-primary">Sign Up</h1>
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="city" className="form-label">
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="Enter Your City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="Enter Your Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button onClick={handleSignUp} className="btn btn-primary w-100">
          Submit
        </button>
        <span><Link to='/login'>Login</Link></span>
      </div>
    </div>
  );
}
