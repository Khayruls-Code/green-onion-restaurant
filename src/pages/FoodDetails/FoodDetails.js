import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import '../Foods/Foods/Foods.css'
import './FoodDetails.css'
import { FiShoppingCart } from 'react-icons/fi';
import { addToCart, getCart } from '../../fakeDB/storage';

const FoodDetails = () => {
  const { foodId } = useParams()
  const [foods, setFoods] = useState([])
  const [food, setFood] = useState({})
  const [count, setcount] = useState(1)
  useEffect(() => {
    fetch('/foodsData.json')
      .then(res => res.json())
      .then(data => {
        if (foodId <= 6) {
          setFoods(data.breakfast)
        } else if (foodId <= 12) {
          setFoods(data.lunch)
        } else {
          setFoods(data.dinner)
        }
      })
  }, [])


  useEffect(() => {
    if (foods.length) {
      const matched = foods.find(food => parseInt(food.id) === parseInt(foodId))
      setFood(matched)
    } else {
      return
    }
  }, [foods])

  const { img, name, desc, price } = food

  const increment = () => {
    setcount(count + 1)
  }

  const decrement = () => {
    if (count > 1) {
      setcount(count - 1)
    }
  }
  const [message, setMessage] = useState('')
  const addToLocalStorage = () => {
    const cart = getCart()
    for (let key in cart) {
      if (key === foodId) {
        setMessage('This Item Alrealdy Added')
        return;
      }
    }
    setMessage('Successfully Added')
    addToCart(foodId, count)
    food.quantity = count
  }

  return (
    <div className='foods'>
      <ul>
        <li>
          <NavLink to='/breakfast'>Breakfast</NavLink>
        </li>
        <li>
          <NavLink to='/lunch'>Lunch</NavLink>
        </li>
        <li>
          <NavLink to='/dinner'>Dinner</NavLink>
        </li>
      </ul>
      <div className='details-row container'>
        <div className="left">
          <h1>{name}</h1>
          <p>{desc}</p>
          <div className="price-count">
            <h2>${price * count}</h2>
            <div className="countBox">
              <button onClick={decrement}>-</button>
              <small>{count}</small>
              <button onClick={increment}>+</button>
            </div>
          </div>
          <p className='message'>{message}</p>
          <button onClick={addToLocalStorage} className='addToCartBtn'>
            <FiShoppingCart />
            Add
          </button>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
