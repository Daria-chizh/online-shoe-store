import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const PageItems = (props) => {
  const { id, images, sku, manufacturer, color, material, season, reason, size } = props.item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
      <section className="catalog-item">
        <div className="row">
          <div className="col-5"></div>
          <img src={images} className="img-fluid" alt=""/>
        </div>

        <div className="col-7">
          <table className="table table-bordered">
            <tbody>

            <tr>
              <td>Артикул</td>
              <td>{sku}</td>
            </tr>

            <tr>
            <td>Производитель</td>
            <td>{manufacturer}</td>
            </tr>

            <tr>
              <td>Цвет</td>
              <td>{color}</td>
            </tr>

            <tr>
              <td>Материалы</td>
              <td>{material}</td>
            </tr>

            <tr>
              <td>Сезон</td>
              <td>{season}</td>
            </tr>

            <tr>
              <td>Повод</td>
              <td>{reason}</td>
            </tr>
            </tbody>
      </table>

        <div className="text-center">
          <p>Размеры в наличии: <span className="catalog-item-size selected">{size}</span> <span className="catalog-item-size">20 US</span></p>
          <p>Количество: <span className="btn-group btn-group-sm pl-2">
            <button className="btn btn-secondary">-</button>
            <span className="btn btn-outline-primary">1</span>
            <button className="btn btn-secondary">+</button>
          </span>
          </p>
        </div>
        <button className="btn btn-danger btn-block btn-lg">В корзину</button>
      </div>
      </section>
  );
};

export default PageItems;
