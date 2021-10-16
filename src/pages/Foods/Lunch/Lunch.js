import React, { useEffect, useState } from 'react';
import Food from '../food/Food';
import '../Foods/Foods.css'

const Lunch = () => {
  const [foods, setFoods] = useState([])
  useEffect(() => {
    fetch('/foodsData.json')
      .then(res => res.json())
      .then(data => setFoods(data.lunch))
  }, [])
  return (
    <div className='container'>
      <div className="food-row">
        {
          foods.map(food => <Food
            key={food.id}
            food={food}
          />)
        }
      </div>
    </div>
  );
};

export default Lunch;