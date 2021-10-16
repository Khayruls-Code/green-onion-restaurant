import React from 'react';
import Foods from '../../Foods/Foods/Foods';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='hero'>
        <div className="hero-text">
          <h1>Best Food Waiting For your Belly</h1>
          <div className="searchBox">
            <input type="text" placeholder='Search by food name' />
            <button>Search</button>
          </div>
        </div>
      </div>
      <Foods />
      <Services />
    </div>
  );
};

export default Home;