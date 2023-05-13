import React, { useState } from "react";
import "./CSS/Login.css"; // import CSS file
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    // Call API endpoint to verify login details
  };

  return (
    <div className="login-container">
        <div className="logo-container">
          {/*<img src="https://www.example.com/tripserio-logo.png" alt="Tripserio" className="logo" />*/}
          <p className="logo">Tripserio</p>
        </div>
      <div className="form-container">
        <h2>WELCOME BACK</h2>
        <p>Login to continue</p>
        <form onSubmit={handleSubmit}>
          <label>
            Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
          <br />
          <label>
            Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
          <div className="check-box"><label for="remember"><input id="remember" type="checkbox" name="remember"/>Remember me</label></div>
          
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link id="link" to="/signup">Sign up</Link></p>
      </div>
    </div>
  );
}

export default Login;