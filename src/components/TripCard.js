import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import numeral from 'numeral';

function TripCard(props) {
    const formattedPrice = numeral(props.price).format('₨0,0.00');

  return (
    <div className="card" style={{ width: '300px'}}>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={props.image1}  alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src={props.image3}
            alt="Third slide"
          />
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
        <div className="card-rating">
            <FontAwesomeIcon icon={faStar} className="star" />
            <span className="rating">{props.rating}</span>
        </div>
        <div> {formattedPrice}</div>

        <button>View Plan</button>
      </div>
    </div>
  );
}

export default TripCard;