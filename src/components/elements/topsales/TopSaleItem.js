import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopSaleItem = (props) => {
  const { id, title, price, images } = props.item;
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/catalog/${id}.html`);
  };

  return (
    <div className="total-information">
      <img className="images" src={images[0]}/>
      <div className="title">{title}</div>
      <div className="price-top">{price}</div>
      <button className="order" onClick={handleOrder}>Заказать</button>
    </div>
  );
};

export default TopSaleItem;
