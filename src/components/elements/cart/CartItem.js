import React from "react";
import { useDispatch } from 'react-redux';

import { removeItemFromCart } from '../../../redux/actions/actionCreators'

export default function CartItem(props) {
  const dispatch = useDispatch();

  const { index, item } = props;
  const { title, selectedSize, count, price } = item;

  const onRemoveItem = () => {
    dispatch(removeItemFromCart(item));
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{title}</td>
      <td>{selectedSize}</td>
      <td>{count}</td>
      <td>{price} руб.</td>
      <td>{count * price} руб.</td>
      <td><button className="cancel" onClick={onRemoveItem}>Удалить</button></td>
    </tr>
  );
}
