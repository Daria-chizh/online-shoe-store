import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { clearCart } from "../../../redux/actions/actionCreators";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // we don't need to update redux store
  const doCheckout = async (owner, items) => {
    setLoading(true);
    setError(null);
    setShowSuccessMessage(false);

    try {
      await fetch(`http://localhost:7070/api/order`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ owner, items })
      });

      // success
      dispatch(clearCart(cart));
      setShowSuccessMessage(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const onChangeField = (e, setField) => {
    setField(e.target.value);
  };

  const onSendForm = async (ev) => {
    await doCheckout({ phone: number, address }, cart);
    ev.preventDefault();
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <form className="checkout-form" onSubmit={onSendForm}>
        <div className="data">
          <div className="telephone">Телефон</div>
          <input type="text" className="telephone-field" name={number} onChange={(e) => onChangeField(e, setNumber)} placeholder="Ваш телефон"/>

          <div className="address">Адрес доставки</div>
          <input type="text" className="address-field" name= {address} onChange={(e) => onChangeField(e, setAddress)} placeholder="Адрес доставки"/>

          <div className="checkbox-container">
            <input type="checkbox" className="checkbox"/>
            <span>Согласен с правилами доставки</span>
          </div>
          <button className="send-form">Оформить</button>
        </div>
      </form>

      {showSuccessMessage && <span>Заказ отправлен</span>}
    </>
  );
};

export default CheckoutForm;
