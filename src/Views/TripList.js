import React, { useEffect , useState } from 'react';
import TripCard from '../components/TripCard';

function TripList(){
  const [trips, setTrips] = useState([]);
    useEffect(() => {
      // Fetch data from the API
      const fetchData = async () => {
        try {
          const response = await fetch('https://tripserio.free.beeceptor.com/search/trips');
          const data = await response.json();
          setTrips(data.trips);
        } catch (error) {
          console.error('Error:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        <div style={{
          display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      }}>
          <h2 >Trips</h2>
        </div>

        
        
        {trips.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="card-grid">
          {trips.map((trip) => (
            <TripCard
          image1="https://mir-s3-cdn-cf.behance.net/project_modules/1400/35ee6f84992701.5d6e870eac299.jpg"
          image2="https://mir-s3-cdn-cf.behance.net/project_modules/1400/9549e184992701.5d735663624f5.jpg"
          image3="https://mir-s3-cdn-cf.behance.net/project_modules/1400/fd9ac684992701.5d6e870eac734.jpg"
          plannerName={trip.planner}
          From={trip.From}
          To={trip.To}
          num_days={trip.num_days}
          num_ppl={trip.num_ppl}
          total_ppl={trip.total_ppl}
          rating={trip.rating}
          price={trip.price}
          />

          ))}
        </div>
      )}
        
      </div>
    );
  };
  
export default TripList;
  