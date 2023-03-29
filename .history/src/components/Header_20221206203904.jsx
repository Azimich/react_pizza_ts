import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logoSvg from '../assets/images/pizza-logo.svg';
import Search from './search';
import { useSelector } from 'react-redux';
import { selectCart } from './../redux/slices/cartSlice';


const Header = () => {
  const { items, totalPrice } = useSelector(selectCart);
  const location = useLocation();
  console.log(location, window.location);

  const totalCount = items.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="header">
      <div className="container">
        <Link to="/home" className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>  
        <Search />
        {location.pathname === '/cart' && (

        )} 
          
      </div>
    </div>
  )
}

export default Header;
