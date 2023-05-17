import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Ghome from './Views/GuestHome';
import Login from './Views/Login';
import SignUp from './Views/SignUp'
import Home from './Views/Home';
import Layout from './components/Layouts/Layout';
import TripList  from './Views/TripList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Layout><br/><br/><br/><Home /></Layout>} />
    <Route path='/home' element={<Layout><Ghome /></Layout>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element ={<SignUp/>}/>
    <Route path='/search' element={<TripList/>}/>
    </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();