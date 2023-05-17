import React from "react";
import "./CSS/createTrip.css";

function TravelPlanner(){
  {
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Travel Planner</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="image1">Image 1</label>
                <input type="file" className="form-control" id="image1" />
              </div>
              <div className="form-group">
                <label htmlFor="image2">Image 2</label>
                <input type="file" className="form-control" id="image2" />
              </div>
              <div className="form-group">
                <label htmlFor="image3">Image 3</label>
                <input type="file" className="form-control" id="image3" />
              </div>
              <div className="form-group">
                <label htmlFor="plannerName">Planner Name</label>
                <input type="text" className="form-control" id="plannerName" />
              </div>
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input type="text" className="form-control" id="from" />
              </div>
              <div className="form-group">
                <label htmlFor="to">To</label>
                <input type="text" className="form-control" id="to" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="num_days">Number of Days</label>
                <input type="number" className="form-control" id="num_days" />
              </div>
              <div className="form-group">
                <label htmlFor="num_ppl">Number of People</label>
                <input type="number" className="form-control" id="num_ppl" />
              </div>
              <div className="form-group">
                <label htmlFor="total_ppl">Total People</label>
                <input type="number" className="form-control" id="total_ppl" />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input type="number" className="form-control" id="rating" />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelPlanner;
