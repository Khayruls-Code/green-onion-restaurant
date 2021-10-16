import React from 'react';
import './PlaceOrder.css'
import bike from '../../images/bike.png'
import healmet from '../../images/healmet.png'

const PlaceOrder = () => {
  const time = new Date()
  time.setMinutes(time.getMinutes() + 30)

  return (
    <div className='container'>
      <div className="order-row">
        <div className="map">
          <iframe title='Take a look on your location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57498.000184900804!2d89.22702583514894!3d25.74991157146866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32de6fca6019b%3A0x9fa496e687f818c8!2sRangpur!5e0!3m2!1sen!2sbd!4v1634356758383!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <div className="shipping-address">
          <img className='bike' src={bike} alt="" />
          <ul>
            <li>
              <h3>Your Loacation</h3>
              <p>ABC road, 2B, Hamim</p>
            </li>
            <li>
              <h3>Shop Address</h3>
              <p>Lolex Restaurant</p>
            </li>
          </ul>
          <div className="time">
            <h2>{time.toLocaleTimeString()}</h2>
            <p>Estimated delevery time</p>
          </div>
          <div className="dellevery-man">
            <img src={healmet} alt="" />
            <div>
              <h3>Sakib Khan</h3>
              <p>Your Rider</p>
            </div>
          </div>
          <button className='placeOrder-btn'>Contact</button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;