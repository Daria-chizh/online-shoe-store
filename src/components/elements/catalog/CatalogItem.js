import React from 'react';
import { useNavigate } from 'react-router-dom';

const CatalogItem = (props) => {
  const { id, title, price, images } = props.item;
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/catalog/${id}.html`);
  };

  return (
    <div className="main-information">
      <img className="all-images" src={images[0]}/>
      <div className="all-title">{title}</div>
      <div className="all-price">{price}</div>
      <button className="all-order" onClick={handleOrder}>Заказать</button>
    </div>
  );
};

export default CatalogItem;
