import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Foods.css'
import {
  Switch,
  Route,
} from "react-router-dom";
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';

const Foods = () => {
  return (
    <div className='foods' id='foodsection'>
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

      <Switch>
        <Route exact path='/'>
          <Breakfast />
        </Route>
        <Route exact path='/breakfast'>
          <Breakfast />
        </Route>
        <Route path='/lunch'>
          <Lunch />
        </Route>
        <Route path='/dinner'>
          <Dinner />
        </Route>
      </Switch>
      <div>

      </div>
      <Link to='/cart'><button className='primary-btn'>CheckOut Your Foods</button></Link>
    </div>
  );
};

export default Foods;