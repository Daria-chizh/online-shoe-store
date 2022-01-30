import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../img/header-logo.png';
import card from '../../img/card.png';
import find from '../../img/find.png';

// const handleSearchMenu = () => {
//   console.log(5);
//   return (
//     <form data-id="search-form" className="header-controls-search-form form-inline invisible">
//       <input className="form-control" placeholder="Поиск" />
//     </form>
//   )
// };

export default function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={logo} alt="Bosa Noga"/></NavLink>
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Главная</NavLink>
      <NavLink to="/catalog.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Каталог</NavLink>
      <NavLink to="/about.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>О магазине</NavLink>
      <NavLink to="/contacts.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Контакты</NavLink>
      <div className="symbols">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={card} className="logo"/></NavLink>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}><img src={find} className="logo"/></NavLink>
      </div>
    </nav>
  )
}
