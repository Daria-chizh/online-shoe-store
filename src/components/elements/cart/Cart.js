import React from 'react';
import CartItem from "./CartItem";

import { getCart } from '../../../storage/cart';

const Cart = () => {
  const items = getCart();

  return (
    <section className="cart-items">
      <div className="cart-container">
        <span className="cart">Корзина</span>
      </div>

      <div className="cart-table">
        <table>
          <tbody>
            <tr>
              <th className="number">#</th>
              <th>Название</th>
              <th className="size">Размер</th>
              <th className="count">Кол-во</th>
              <th className="price-th">Стоимость</th>
              <th className="total-th">Итого</th>
              <th className="action-th">Действия</th>
            </tr>
            {items.map((item, idx) => <CartItem item={item} index={idx} />)}
          </tbody>
        </table>
        <div className="total-cost">Общая стоимость: {items.reduce((sum, item) => sum + item.count * item.price, 0)} руб.</div>
      </div>
    </section>
  );
};

export default Cart;


