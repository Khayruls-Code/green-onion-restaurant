import React from 'react';
import './Footer.css'
import logo from '../../../images/logo3.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="footer-row">
          <div className="footer-col1">
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum necessitatibus facere dolores veritatis quas modi odio porro doloremque reiciendis voluptatum?</p>
          </div>
          <div className="footer-col2">
            <ul>
              <li>About Online Food</li>
              <li>Read our Blog</li>
              <li>Sing Up To Delevery</li>
              <li>Add Your Restautant</li>
            </ul>
          </div>
          <div className="footer-col2">
            <ul>
              <li>Get Helps</li>
              <li>Read FAQs</li>
              <li>View All Cities</li>
              <li>Reataurant Nere Me</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="footer-row">
          <p className='copyright'>&copy; Copyright 2021 by Colourless Khayrul</p>
          <div className="term">
            <ul>
              <li>Privecy Policy</li>
              <li>Term and use</li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;