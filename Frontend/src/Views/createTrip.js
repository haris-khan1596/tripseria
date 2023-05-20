import "./CSS/createTrip.css";
import React, { useState } from "react";

function CreateTrip(){

    return (
      <div>
        
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Travel Planner</h1>
            </div>
          </div>
          <form action={localStorage.getItem('api')+"planner/trips/create"} method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_token" value="bjhjsjlnhcdwuohusdkj"/>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="image1">Image 1</label>
                <input type="file" className="form-control" id="image1" name="image1"/>
              </div>
              <div className="form-group">
                <label htmlFor="image2">Image 2</label>
                <input type="file" className="form-control" id="image2" name="image2"/>
              </div>
              <div className="form-group">
                <label htmlFor="image3">Image 3</label>
                <input type="file" className="form-control" id="image3" name='image3'/>
              </div>
              <div className="form-group">
                
                <input type="hidden" className="form-control" id="plannerName" name="planner" value="NorthX"/>
              </div>
              <div className="form-group">
                <label htmlFor="from">From</label>
                <input type="text" className="form-control" id="from" name="from"/>
              </div>
              <div className="form-group">
                <label htmlFor="to">To</label>
                <input type="text" className="form-control" id="to" name="to"/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="num_days">Number of Days</label>
                <input type="number" className="form-control" id="num_days" name="duration"/>
              </div>
             <div className="form-group">
                <label htmlFor="total_ppl">Total People</label>
                <input type="number" className="form-control" id="total_ppl" name="total_ppl"/>
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>"
                <input type="number" className="form-control" id="rating" name="rating" min={0} max={5}/>
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="number" className="form-control" id="price" name="price"/>
              </div>
              <button type="submit">Create Trip</button>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }

export default CreateTrip;
