import TripCard from "./TripCard";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TripSection() {
    const [homeTrips, setHomeTrips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${localStorage.getItem('api')}trips/get4`);
        const data = response.data;
        console.log("Trips");
        console.log(data);
        setHomeTrips(data.trips);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
    return(
    <section id="trips">
      <div className="center">
        <h4>TOP TRIPS AROUND PAKISTAN</h4>
        <h2>Explore Top Destination</h2>
      </div>
      <div className="card-grid">
      {homeTrips.map((trip) => (
            <TripCard  
            id ={trip.id}
            image1={trip.image1}
            image2={trip.image2}
            image3={trip.image3}
            plannerName={trip.planner}
            From={trip.from}
            To={trip.to}
            num_days={trip.duration}
            num_ppl= {trip.num_ppl}
            total_ppl={trip.total_ppl}
            rating={trip.rating}
            price={trip.price}
            />
          ))}
          </div>
          <hr/>
      </section>);
      
}
export default TripSection;