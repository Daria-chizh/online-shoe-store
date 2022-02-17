import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/common/Menu';
import CatalogPage from './components/CatalogPage';
import ItemPage from './components/ItemPage';
import Cart from './components/elements/cart/Cart';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog.html" element={<CatalogPage />} />
            <Route path="/catalog/:id.html" element={<ItemPage />} />
            <Route path="/cart.html" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

