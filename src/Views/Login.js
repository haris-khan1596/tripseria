// import React, { useState } from "react";
// import "./CSS/Login.css"; // import CSS file
// import { Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(`Email: ${email}, Password: ${password}`);
//     // Call API endpoint to verify login details
//   };

//   return (
//     <div className="login-container">
      
//       <div className="form-container">
//         <div className="logo-container">
//           {/*<img src="https://www.example.com/tripserio-logo.png" alt="Tripserio" className="logo" />*/}
//           <p className="logo">Tripserio</p>
//         </div>
//         <h1>Login to your Tripserio account</h1>
//         <form onSubmit={handleSubmit}>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           <br />
//           <label>
//             Password:
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </label>
//           <br />
//           <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
//       </div>
//       <div className="image-container">
//         <img src={process.env.PUBLIC_URL +"Assets/login.svg"} alt="Travel" />
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import "./CSS/Login.css"; // import CSS file

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
    <div className="login-container">
      <div className="login-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="login-form">
        <h2>Welcome back!</h2>
        <p>Login to continue</p>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} placeholder="abc@gmail.com" required />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} placeholder="******" required />
        </div>
        <button type="submit">Login</button>
      </div>
    </div>
    </div>
  );
}

export default Login;