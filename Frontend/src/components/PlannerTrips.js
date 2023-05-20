import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState } from "react";
import "./CSS/PlannerTrips.css";

function PlannerTrips() {
    const [trips, setTrips] = useState([]);
    const uid= JSON.parse(localStorage.getItem('user')).id;
    const apiEndpoint= localStorage.getItem('api')+'planner/trips/'+uid;

    axios.get(apiEndpoint)
    .then((response)=>{
        return response.data;
    }).then((data)=>{
        setTrips(data.trips);
    }).catch((error) => {
        console.error("Error:", error);
        console.log("error");
      });

    return(

        <div className="planner-trips"> 
            
            {trips.length===0? (
        <p>Loading...</p>
      ) : (
        <table className="trips-table">
            <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Price</th>
              <th>Number of People</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
                {trips.map((trip) => (
                    <tr key={trip.id}>
                        <td>{trip.from}</td>
                        <td>{trip.to}</td>
                        <td>{trip.price}</td>
                        <td>{trip.num_ppl}</td>
                        <td>
                            <a href={localStorage.getItem('api')+'planner/trips/'+trip.id+'/destroy'}><button className="btn btn-danger delete-btn">Delete</button></a>
                        </td>
                    </tr>
                ))}
            </tbody>
      </table>
      )}
        </div>
    );
}
export default PlannerTrips;