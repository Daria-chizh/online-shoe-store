import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import logo from '../../img/header-logo.png';
import card from '../../img/card.png';
import Search from "../elements/Search";

export default function Menu() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleCart = () => {
    navigate('/cart.html');
  };

  return (
    <nav className="menu">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={logo} alt="Bosa Noga"/></NavLink>
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Главная</NavLink>
      <NavLink to="/catalog.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Каталог</NavLink>
      <NavLink to="/about.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>О магазине</NavLink>
      <NavLink to="/contacts.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Контакты</NavLink>
      <div className="symbols">

        <div className="header-controls-pics">
          <div data-id="search-expander" className="header-controls-pic header-controls-search"></div>
          <span><img src={card} className="logo" onClick={handleCart}/></span>
          {
            cart.length !== 0
              ? <div className="header-controls-pic header-controls-cart"><div className="header-controls-cart-full">{ cart.length}</div></div>
              : null
          }
        </div>
      </div>
      <Search/>
    </nav>
  )
}




