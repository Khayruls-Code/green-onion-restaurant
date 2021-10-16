import React from 'react';
import service1 from '../../../images/Image/service1.png'
import service2 from '../../../images/Image/service2.png'
import service3 from '../../../images/Image/service3.png'
import { AiOutlineBell } from 'react-icons/ai'
import { BiBusSchool, BiRun } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import './Services.css'

const Services = () => {
  return (
    <div className='container'>
      <div className="section-title">
        <h1>Why You Choose Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iusto delectus debitis sit, </p>
      </div>
      <div className="service-row">
        <div className="service-col">
          <img src={service1} alt="" />
          <div className="service">
            <div className="service-title">
              <div className="service-icon">
                <BiRun />
              </div>
              <h2>First Delevery</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit mollitia blanditiis accusamus! Ullam, veritatis repellat molestias inventore officia rem</p>
            <div className="seeMoreBtn">
              <p>See More</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="service-col">
          <img src={service2} alt="" />
          <div className="service">
            <div className="service-title">
              <div className="service-icon">
                <AiOutlineBell />
              </div>
              <h2>First Delevery</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit mollitia blanditiis accusamus! Ullam, veritatis repellat molestias inventore officia rem</p>
            <div className="seeMoreBtn">
              <p>See More</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
        <div className="service-col">
          <img src={service3} alt="" />
          <div className="service">
            <div className="service-title">
              <div className="service-icon">
                <BiBusSchool />
              </div>
              <h2>First Delevery</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sit mollitia blanditiis accusamus! Ullam, veritatis repellat molestias inventore officia rem</p>
            <div className="seeMoreBtn">
              <p>See More</p>
              <BsArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;