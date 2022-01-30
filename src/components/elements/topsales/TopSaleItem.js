import React from 'react';

const TopSaleItem = (props) => {
  const { title, price, images } = props.item;

  const handleOrder = () => {
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
