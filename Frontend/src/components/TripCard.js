import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faHeart } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';
import axios from 'axios';



function TripCard(props) {
    const formattedPrice = numeral(props.price).format('₨0,0.00');
    const url = new URL(localStorage.getItem('api'));
    const baseUrl = url.origin;
    const handleSubmit = (event) => {
      event.preventDefault();  
      // handle api 
      // console.log(props);
      axios.get(`${localStorage.getItem('api')}trips/${props.id}/book`).then(
        (response)=>{
          const data=response.data;
          if (data.message === 'Trip Booked Successfully') {
          if (localStorage.getItem('cart')) {
            const cart=JSON.parse(localStorage.getItem('cart')).carts;
            cart.push(JSON.stringify(props));
            localStorage.setItem('cart',JSON.stringify({"carts":cart}));
          } else {
            const cart = [];
            cart.push(JSON.stringify(props));
            localStorage.setItem('cart',JSON.stringify({"carts":cart}));
          }
        }          
        alert(data.message);
        }
      );

    }

  return (
    <div className="card" style={{ width: '300px'}}>
      <FontAwesomeIcon icon={faHeart} className="add-to-my-trip-icon" />
      <Carousel>
        <Carousel.Item>
            <div className="carousel-image-container">
                <img className="d-block w-100" src={props.image1.replace('public/', `${baseUrl}/storage/`)}  alt="First slide"/>
            </div>
            
        </Carousel.Item>
        <Carousel.Item>
        <div className="carousel-image-container">
            <img className="d-block w-100" src={props.image2.replace('public/', `${baseUrl}/storage/`)}  alt="Second slide"/>
        </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="carousel-image-container">
                <img className="d-block w-100" src={props.image3.replace('public/', `${baseUrl}/storage/`)}  alt="third slide"/>
            </div>
        </Carousel.Item>
      </Carousel>
      <div className="card-info">
        <h3>{props.plannerName}</h3>
        <div className='details'>
          <p >From: {props.From}</p>
          <p className='days'>{props.num_days}</p>
          <p>To: {props.To}</p>
          <p className='ppl'>{props.num_ppl}/{props.total_ppl} seats</p>
        </div>
        <hr></hr>
        <div  className='bottom-card'>
        <div>
        <div className="card-rating">
            <FontAwesomeIcon icon={faStar} className="star" />
            <span className="rating">{props.rating}</span>
        </div>
        <div>PKR {formattedPrice}</div>
        </div>
        <button onClick={handleSubmit} className='btn-view-trip'>Book</button>
        </div>
      </div>
    </div>
  );
}

export default TripCard;