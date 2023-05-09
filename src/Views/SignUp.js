import React, { useState } from "react";
import "./CSS/Login.css"; // import CSS file
import { Link } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    // Call API endpoint to create user account
  };

  return (
    <div className="login-container">
      <div className="logo-container">
          {/*<img src="https://www.example.com/tripserio-logo.png" alt="Tripserio" className="logo" />*/}
          <p className="logo">Tripserio</p>
        </div>
      <div className="form-container">
        <h1>WELCOME </h1>
        <p>Signup to create your account</p>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button type="submit">Sign up</button>
        </form>
        <p>Already have an account? <Link id="link" to="/login">Login</Link></p>
      </div>
      <div className="image-container">
        <img src={process.env.PUBLIC_URL +"Assets/login.svg"} alt="Travel" />
      </div>
    </div>
  );
}

export default SignUp;
