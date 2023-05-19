import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Review from './review';
import './CSS/reviewSection.css';

function Reviews() {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${localStorage.getItem('api')}reviews`);
        const data = response.data;
        setReviewsData(data.reviews);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="reviews">
      <div className="center">
        <h4>Testimonial</h4>
        <h2>What Our Clients Say About Us</h2>
      </div>

      <div className="reviews-container">
        <div className="reviews-row">
          {reviewsData.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Reviews;
