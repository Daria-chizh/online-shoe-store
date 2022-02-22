import React from 'react';
import { useSelector } from 'react-redux';

import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

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
            {cart.map((item, idx) => <CartItem item={item} index={idx} key={idx} />)}
          </tbody>
        </table>
        <div className="total-cost">Общая стоимость: {cart.reduce((sum, item) => sum + item.count * item.price, 0)} руб.</div>
      </div>

      <div className="checkout-container">
        <span className="checkout">Оформить заказ</span>
      </div>

      <CheckoutForm />
    </section>
  );
};

export default Cart;


