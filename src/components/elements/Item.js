import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addItemToCart } from '../../redux/actions/actionCreators'

const Item = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(1);

  const { id, title, images, sku, manufacturer, color, material, price, season, reason, sizes } = props.item;

  const onSelectSize = (size) => {
    setSelectedSize(size);
  };

  const onMinCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onMaxCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleCart = () => {
    dispatch(addItemToCart({ id, title, selectedSize, count, price }));
    navigate('/cart.html');
  };

  const availableSizes = sizes.filter((item) => item.avalible === true);

  return (
    <section className="catalog-item">
      <div className="row">
        <div className="col-5"></div>
        <div className="title-item">{title}</div>
        <img src={images[0]} className="img-item" alt=""/>
      </div>

      <div className="col-7">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td>Артикул</td>
              <td>{sku || ''}</td>
            </tr>

            <tr>
            <td>Производитель</td>
            <td>{manufacturer || ''}</td>
            </tr>

            <tr>
              <td>Цвет</td>
              <td>{color || ''}</td>
            </tr>

            <tr>
              <td>Материалы</td>
              <td>{material || ''}</td>
            </tr>

            <tr>
              <td>Сезон</td>
              <td>{season || ''}</td>
            </tr>

            <tr>
              <td>Повод</td>
              <td>{reason || ''}</td>
            </tr>
          </tbody>
        </table>
        <div className="text-center">
          <p className="sizes">Размеры в наличии:
            {
              availableSizes.map((item) =>
                <span className={item.size === selectedSize ? "catalog-item-size selected" : "catalog-item-size"} onClick={() => onSelectSize(item.size)}>{item.size}</span>
              )
            }
          </p>

          {
            availableSizes.length !== 0
              ?
                <p>
                  Количество:
                  <span className="btn-group btn-group-sm pl-2">
                    <button className="btn btn-secondary" onClick={onMinCount}>-</button>
                    <span className="btn btn-outline-primary">{count}</span>
                    <button className="btn btn-secondary" onClick={onMaxCount}>+</button>
                  </span>
                </p>
              : null
          }
        </div>
        { selectedSize && availableSizes.length !== 0 ? <button className="btn btn-danger btn-block btn-lg" onClick={handleCart}>В корзину</button> : null }
      </div>
    </section>
  );
};

export default Item;
