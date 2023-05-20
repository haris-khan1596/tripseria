import '../App.css';
import TripCard from '../components/TripCard';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import preloader from '../components/Preloader';



function Home(){
  const [trips, setTrips] = useState([]);
  const search= window.location.search;
  let searchParams = new URLSearchParams(search);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let query;
        if (searchParams.size>=1) {
          query='/'+searchParams.get('query');
          console.log(query);
        } else {
          query='';
        }
        const response = await axios.get(`${localStorage.getItem('api')}trips${query}/get`);
        const data = response.data;
        console.log("Trips");
        console.log(data);
        setTrips(data.trips);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
    return(
        <div>
        <div style={{
          display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
          <h2 >Trips</h2>
        </div>

        {trips.length===0?<preloader/>:
        <div className="card-grid">
        {trips.map((trip) => (
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
        </div>}
      </div>
    );
}
export default Home;