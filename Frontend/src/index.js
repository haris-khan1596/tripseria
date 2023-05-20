import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route ,Navigate} from "react-router-dom";
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
import { isloggedIn, isplanner } from './helper';
import CreateTrip from './Views/createTrip';
import Profile from './Views/Profile';
import PlannerTrips from './Views/PlannerTrips';



const root = ReactDOM.createRoot(document.getElementById('root'));
localStorage.setItem('token', "xjibfibuhfhbjnfnuzxnigkfdi");
localStorage.setItem('api',"http://127.0.0.1:8000/api/");
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    
    <Route path="/" element={<Layout><Ghome /></Layout>} />
    <Route path='/trips' element={<Layout><br/><br/><br/><Home /></Layout>}/>
    <Route path="/login" element={isloggedIn()?isplanner()?<Navigate to='/planner/profile' />:<Navigate to='/user/profile' />:<Login/>}/>
    <Route path="/signup" element ={isloggedIn()?isplanner()?<Navigate to='/planner/profile' />:<Navigate to='/user/profile' />:<SignUp/>}/>
    <Route path='/search' element={<Layout><TripList/></Layout>}/>
    <Route path='/planner/signup' element={isloggedIn()?isplanner()?<Navigate to='/planner/profile' />:<Navigate to='/user/profile' />:<SignUp />}/>
    <Route path='/planner/trips' element={isloggedIn()&&isplanner() ?<Layout><PlannerTrips /></Layout>:<Navigate to='/planner/signup' />}/>
    <Route path='/planner/profile' element={<Layout><Profile/></Layout>}/>
    <Route path='/planner/create/trip' element={<Layout><CreateTrip/></Layout>}/>
    <Route path='/user/profile' element={<Layout><Profile/></Layout>}/>
    <Route path='*' element={<Navigate to='/' />}/>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
