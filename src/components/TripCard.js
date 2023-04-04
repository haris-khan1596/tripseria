import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function TripCard(props) {
  return (
    <div class="card" style={{ width: '300px', height: '300px' }}>
      <Carousel>
        <Carousel.Item>
          <img
            class="d-block w-100"
            src={props.image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="d-block w-100"
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
      <div class="card-body">
        <h5 class="card-title">{props.title}</h5>
        <p class="card-text">{props.description}</p>
      </div>
    </div>
  );
}

export default TripCard;
