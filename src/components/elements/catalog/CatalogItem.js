import React from 'react';

const CatalogItem = (props) => {
  const { title, price, images } = props.item;

  return (
    <div className="main-information">
      <img className="all-images" src={images[0]}/>
      <div className="all-title">{title}</div>
      <div className="all-price">{price}</div>
      <button className="all-order">Заказать</button>
    </div>
  );
};

export default CatalogItem;
