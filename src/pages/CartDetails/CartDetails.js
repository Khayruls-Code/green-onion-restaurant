import React from 'react';
import '../Cart/Cart.css'
import { FiX } from 'react-icons/fi'

const CartDetails = (props) => {
  const { food: { name, quantity, img, price, id }, deleteItem } = props

  return (
    <div className='item-row'>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{name}</h3>
        <p className='price'>${price * quantity}</p>
        <p className='quantity'>Quantity: {quantity}</p>
      </div>
      <div onClick={() => deleteItem(id)} className='delete'>
        <FiX />
      </div>
    </div>
  );
};

export default CartDetails;