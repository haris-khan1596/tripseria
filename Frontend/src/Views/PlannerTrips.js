import { Link } from "react-router-dom";
import axios from 'axios';
import React, { useState } from "react";

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
        <div>
            {trips.length===0? (
        <p>Loading...</p>
      ) : (
        <table>
        {trips.map((trip) => (
            <tr>
                <td>
                    {trip.from}
                </td>
                <td>
                    {trip.to}
                </td>
                <td>
                    <a href={localStorage.getItem('api')+'planner/trips/'+trip.id+'/destroy'}><button className="btn btn-danger">Delete</button></a>
                </td>
            </tr>

      ))}
      </table>
      )}
        </div>
    );
}
export default PlannerTrips