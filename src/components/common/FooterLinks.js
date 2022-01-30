import React from 'react';
import { NavLink } from 'react-router-dom';

export default function FooterLinks() {
  return (
    <nav>
      <div className="footer-page">
        <NavLink to="/about.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>О магазине</NavLink>
        <NavLink to="/catalog.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Каталог</NavLink>
        <NavLink to="/contacts.html" className={({ isActive }) => isActive ? "nav-item nav-item-active" : "nav-item"}>Контакты</NavLink>
      </div>
    </nav>
  )
}
