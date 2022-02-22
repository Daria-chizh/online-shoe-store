import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { doCheckout } from "../../../redux/actions/actionCreators";
const dispatch = useDispatch();

const CheckoutForm = () => {
  const { checkout: { loading, error }, cart } = useSelector((state) => ({ checkout: state.checkout, cart: state.cart }));

  const [address, setAddress] = useState();
  const [number, setNumber] = useState();

  const onChangeField = (e, setField) => {
    setField(e.target.value);
  };

  const onSendForm = () => {
    dispatch(doCheckout({ phone: number, address }, cart));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <form className="checkout-form" onSubmit={onSendForm}>
      <div className="data">
        <div className="telephone">Телефон</div>
        <input type="text" className="telephone-field" name={number} onChange={(e) => onChangeField(e, setNumber)} placeholder="Ваш телефон"/>

        <div className="address">Адрес доставки</div>
        <input type="text" className="address-field" name= {address} onChange={(e) => onChangeField(e, setAddress)}  placeholder="Адрес доставки"/>

        <div className="checkbox-container">
          <input type="checkbox" className="checkbox"/>
          <span>Согласен с правилами доставки</span>
        </div>
        <button className="send-form">Оформить</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
