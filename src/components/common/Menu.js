import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import logo from '../../img/header-logo.png';
import card from '../../img/card.png';
import find from '../../img/find.png';


export default function Menu() {
  const navigate = useNavigate();

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
          <div data-id="search-expander" class="header-controls-pic header-controls-search"></div>
          <div class="header-controls-pic header-controls-cart">
            <div class="header-controls-cart-full">1</div>
            <div class="header-controls-cart-menu"></div>
            <span><img src={card} className="logo" onClick={handleCart}/></span>
          </div>
        </div>

        <span><img src={find} className="logo"/></span>
        {/*<NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={card} className="logo"/></NavLink>*/}
        {/*<NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={find} className="logo"/></NavLink>*/}
      </div>
    </nav>
  )
}




