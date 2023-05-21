import React from 'react';
import './CSS/Profile.css';
import PlannerTrips from '../components/PlannerTrips';
import { isplanner } from '../helper';
import CartModal from '../components/cartitem';

function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  const name = user.username;
  const email = user.email;
  const contact = user.contact;
  const userType = user.type;

  return (
    <div className="layout-container">
      <div className="profile-content-container">
        <div className="profile-container">
          <div className="profile">
            <h2 className="profile-title">{userType} Profile</h2>
            <img
              src="https://img.freepik.com/free-icon/man_318-487775.jpg?size=626&ext=jpg"
              alt="Profile"
              className="profile-img"
            />
            <div className="data">
              <div className="profile-info">
                <label>Name:</label>
                <p>{name}</p>
              </div>
              <div className="profile-info">
                <label>Email:</label>
                <p>{email}</p>
              </div>
              <div className="profile-info">
                <label>Contact:</label>
                <p>{contact}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-container">
          {isplanner() ? (
            <div>
              <h2 className="profile-title">{userType} Trips</h2>
              <PlannerTrips />
            </div>
          ) : (
            <>
              <h2 className="profile-title">{userType} Trips</h2>
              <CartModal withFunctionality={false} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
