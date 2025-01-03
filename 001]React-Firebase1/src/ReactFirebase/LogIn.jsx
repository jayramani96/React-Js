import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  return (
    <div style={{ width: '100%' }} >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg-dark text-dark">
      <div
        className="card p-4 shadow-lg"
        style={{
          maxWidth: "600px",
          width: "100%",
          border: "none",
          borderRadius: "15px",
          backgroundColor: "#ffffff", // Pure white card background
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
        }}
      >
        <h1 className="text-center text-primary mb-4">Log In</h1>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label text-dark">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            style={{
              backgroundColor: "#f8f9fa", // Soft light gray background
              color: "#000", // Black text for readability
              border: "1px solid #ced4da", // Subtle border color
              borderRadius: "8px",
            }}
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="password" className="form-label text-dark">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            style={{
              backgroundColor: "#f8f9fa", // Soft light gray background
              color: "#000", // Black text for readability
              border: "1px solid #ced4da", // Subtle border color
              borderRadius: "8px",
            }}
          />
        </div>
        <button
          onClick={handleLogin}
          className="btn btn-primary w-100 mb-3"
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            padding: "10px 0",
            backgroundColor: "#0d6efd", // Vibrant primary blue
            borderColor: "#0d6efd", // Match button border to background
            borderRadius: "8px",
          }}
        >
          Login
        </button>
        <div className="text-center">
          <span className="text-dark">Don't have an account? </span>
          <Link to="/" className="text-primary text-decoration-none fw-bold">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
    </div>
    
  );
}
