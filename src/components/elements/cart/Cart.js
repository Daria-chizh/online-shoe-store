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

      <div className="checkout-container">
        <span className="checkout">Оформить заказ</span>
      </div>

      <form className="checkout-form">
        <div className="data">
          <div className="telephone">Телефон</div>
          <input type="number" className="telephone-field" placeholder="Ваш телефон"/>
          <div className="address">Адрес доставки</div>
          <input type="text" className="address-field" placeholder="Адрес доставки"/>

          <div className="checkbox-container">
          <input type="checkbox" className="checkbox"/>
          <span>Согласен с правиласи доставки</span>
          </div>
          <button className="send-form">Оформить</button>
        </div>
      </form>
    </section>
  );
};

export default Cart;


