import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { deleteFromCart, getCart } from '../../fakeDB/storage';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = () => {
  const [foodCategories, setFoodCategories] = useState([])
  const [orderdFood, setOrderdFood] = useState([])

  useEffect(() => {
    fetch('/foodsData.json')
      .then(res => res.json())
      .then(data => setFoodCategories(data))
  }, [])

  useEffect(() => {
    const cart = getCart()
    const foodArr = []
    for (const categorie in foodCategories) {
      let foods = foodCategories[categorie]
      for (const food of foods) {
        foodArr.push(food)
      }
    }
    if (foodArr.length) {
      const matchedFood = []
      for (const key in cart) {
        const matched = foodArr.find(food => parseInt(food.id) === parseInt(key))
        matched.quantity = cart[key]
        matchedFood.push(matched)
      }
      setOrderdFood(matchedFood)
    }
  }, [foodCategories])

  let totalprice = 0
  let quantity = 0
  let fee = 0;

  if (orderdFood.length) {
    for (const food of orderdFood) {
      let price = food.price * food.quantity
      quantity = quantity + food.quantity
      totalprice += price
    }
  }

  let tax = (totalprice * 5 / 100).toFixed(2)

  if (totalprice <= 0) {
    fee = 0
  } else if (totalprice <= 500) {
    fee = 20
  } else if (totalprice <= 1000) {
    fee = 40
  } else {
    fee = 50
  }

  let total = (parseFloat(totalprice) + parseFloat(tax) + parseFloat(fee)).toFixed(2)

  const deleteItem = (id) => {
    const matched = orderdFood.filter(food => food.id !== id)
    setOrderdFood(matched)
    deleteFromCart(id)
  }


  return (
    <div className='cart'>
      <div className="container">
        <p className='goHome'>
          <NavLink to='/'>Home</NavLink>/Cart
        </p>
        <div className="cart-row">
          <div className="cart-left">
            <div className='form-container'>
              <h2>Sing Up Here</h2>
              <form>
                <div>
                  <input type="text" placeholder='Delevery type' />
                </div>
                <div>
                  <input type="text" placeholder='City' />
                </div>
                <div>
                  <input type="text" placeholder='Road no/flat' />
                </div>
                <div>
                  <input type="text" placeholder='Business Name' />
                </div>
                <div>
                  <input type="text" placeholder='Add delevery Instructor' />
                </div>
                <p className='error'></p>
                <input type="submit" value="Save And Continue" />
              </form>
            </div>
          </div>
          <div className="cart-right">
            <p>From <b>Lolex Restaurant</b></p>
            <p>Arriving in 20 to 30 min</p>
            <p>ABC Road, 2B, Alim</p>
            {
              orderdFood?.map(food => <CartDetails
                key={food.id}
                food={food}
                deleteItem={deleteItem}
              />)
            }
            <div className="price-details">
              <table>
                <tbody>
                  <tr>
                    <td>Total Ordered</td>
                    <td>{quantity}</td>
                  </tr>
                  <tr>
                    <td>Total Price</td>
                    <td>${totalprice}</td>
                  </tr>
                  <tr>
                    <td>Tax</td>
                    <td>${tax}</td>
                  </tr>
                  <tr>
                    <td>Delevery Fee</td>
                    <td>${fee}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>${total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to='/placeorder'>
              <button className='placeOrder-btn'>Place Order</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;