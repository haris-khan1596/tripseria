import React, { useState } from "react";
import "./CSS/Login.css"; // import CSS file
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  
    // Determine the API endpoint based on the current URL
    const currentUrl = window.location.href;
    let apiEndpoint = localStorage.getItem('api')+"login";
  
    // Create the user object to send in the request body
    const user = {
      email: email,
      password: password
    };

  axios.post(apiEndpoint,{...user, _token: "harisharis"})
    //fetch(apiEndpoint, req)
      .then((response) => {
          console.log(response.status);
          return response.data;
        })
      .then((data) => {
        // Handle the response from the server
        localStorage.setItem('isloggedIn',true);
        localStorage.setItem('isplanner',data.isplanner);
        localStorage.setItem('user',JSON.stringify(data.user));
        console.log(data);
        // Reset the form fields
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("error");
      });
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