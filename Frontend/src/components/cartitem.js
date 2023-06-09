import React from 'react';
import "./CSS/CartItem.css";
import numeral from 'numeral';
import axios from 'axios';


var cartItems=JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')).carts:[];
function CartItem(props){
    const item = JSON.parse(props.item);
    const formattedPrice = numeral(item.price).format('₨0,0.00');
    console.log(item);
    const apiEndpoint = localStorage.getItem('api')+"trips/"+item.id+"/unbook";
    const handleunBook = (event) => {
        event.preventDefault();
        axios.get(apiEndpoint).then(
            (response)=>{
              const data=response.data;
              if (data.message === 'Trip Booking has been cancelled') {
                cartItems.splice(props.index,1);
                console.log(cartItems);
                 localStorage.setItem('cart',JSON.stringify({"carts":[...cartItems]}));
              }}).then(()=>{props.close();}); 
    }
    return (<div className="cart-modal-item" key={item.id}>
    <img src={item.image1} alt={item.planner} />
    <div className="cart-modal-item-details">
      <div className="item-details-header">
        <h3>{item.plannerName}</h3>
        {props.withFunctionality!=="false"?<button className='btn btn-sm btn-danger delete' onClick={handleunBook}><span id="boot-icon" class="bi bi-x"></span></button>:<></>}
        
      </div>
      <div className="item-details-content">
        <p><strong>To:</strong> {item.To}</p>
        <p><strong>From:</strong> {item.From}</p>
        <strong>PKR {formattedPrice}</strong>
      </div>
    </div>
    <hr/>
  </div>
  );
}
function CartModal(props){
    cartItems=JSON.parse(localStorage.getItem('cart'))?JSON.parse(localStorage.getItem('cart')).carts:[];
  if (!props.withFunctionality) {
    // Render the CartModal without opening and closing functionality
    return (
      
        <div className="cart-content">
          
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <CartItem item={item} index={index} close={props.onClose} withFunctionality="false" />
            ))}
          </div>
        </div>
    );
  }
  // Render the CartModal with opening and closing functionality
  return (
    <div className={`cart-modal ${props.isOpen ? 'open' : ''}`}>
      <div className="cart-modal-overlay" onClick={props.onClose} />
      <div className="cart-modal-content">
        <div className="cart-modal-header">
          <h2>Cart</h2>
          <button className='cart-modal-close btn btn-sm btn-danger' onClick={props.onClose}><span id="boot-icon" class="bi bi-x"></span></button>
        </div>
        <div className="cart-modal-items">
          {cartItems.map((item,index) => (
            <CartItem item={item} index={index} close={props.onClose}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

