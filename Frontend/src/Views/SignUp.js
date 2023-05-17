import React, { useState } from "react";
import "./CSS/Login.css"; // import CSS file
import { Link } from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
  
    // Determine the API endpoint based on the current URL
    const currentUrl = window.location.href;
    let apiEndpoint = "";
    
    if (currentUrl.includes("/planner")) {
      apiEndpoint = "http://10.7.92.226:8000/api/planner/signup"; // For planner signup
    } else {
      apiEndpoint = "http://10.7.92.226:8000/api/signup"; // For simple user signup
    }
  
    // Create the user object to send in the request body
    const user = {
      name: name,
      email: email,
      password: password
    };
  const req={
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  };
  console.log(req);
  axios.post(apiEndpoint,{...user, _token: "harisharis"})
    //fetch(apiEndpoint, req)
      .then((response) => {if (!response.ok) {
            throw new Error("Signup failed");
          }
          return response.json();
        })
      .then((data) => {
        // Handle the response from the server
        console.log(data);
        // Reset the form fields
        setName("");
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
    </div>
  );
}

export default SignUp;
