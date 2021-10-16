import React from 'react';
import { Link } from 'react-router-dom';
import '../Foods/Foods.css'

const Food = (props) => {
  const { food: { name, img, desc, price, id } } = props
  return (
    <Link to={`/food/${id}`}>
      <div className='food-col'>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{desc.slice(0, 80)}</p>
        <h2>Price: ${price}</h2>
      </div>
    </Link>
  );
};

export default Food;