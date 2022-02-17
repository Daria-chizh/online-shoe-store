import React from "react";

import { getCart, saveCart } from '../../../storage/cart';

export default function CartItem(props) {
  const { index, item: { title, selectedSize, count, price } } = props;

  const onRemoveItem = () => {
    const items = getCart();
    const updatedItems = items.filter((item) => item.title !== title || item.selectedSize !== selectedSize);
    saveCart(updatedItems);
  };

  return (
    <tr>
      <td >{index + 1}</td>
      <td>{title}</td>
      <td>{selectedSize}</td>
      <td>{count}</td>
      <td>{price} руб.</td>
      <td>{count * price} руб.</td>
      <td><button className="cancel" onClick={onRemoveItem}>Удалить</button></td>
    </tr>
  );
}
