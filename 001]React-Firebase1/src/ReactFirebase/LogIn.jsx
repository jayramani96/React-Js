import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light" style={{width:'600px'}}>
      <div className="card p-4 shadow-lg" style={{ maxWidth: '600px', width: '100%', border: 'none', borderRadius: '15px', backgroundColor: '#1f2b37' }}>
        <h1 className="text-center text-warning mb-4">Log In</h1>
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
          onClick={handleLogin}
          className="btn btn-warning w-100 mb-3"
          style={{ fontWeight: 'bold', fontSize: '16px' }}
        >
          Login
        </button>
        <div className="text-center">
          <span className="text-light">Don't have an account? </span>
          <Link to="/" className="text-warning text-decoration-none fw-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
