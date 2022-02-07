import React, {useState} from 'react';

const Item = (props) => {
  const { title, images, sku, manufacturer, color, material, season, reason, sizes } = props.item;
  const [selectedSize, setSelectedSize] = useState();

  const onSelectSize = (size) => {
    setSelectedSize(size);
  };

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
              sizes
                .filter((item) => item.avalible === true)
                .map((item) => <span className="catalog-item-size" onClick={() => onSelectSize(item.size)}>{item.size}</span>)
            }
            <span className={(item) => item.size === selectedSize ? "catalog-item-size selected" : "catalog-item-size"}></span>
          </p>
          <p>Количество: <span className="btn-group btn-group-sm pl-2">
            <button className="btn btn-secondary">-</button>
            <span className="btn btn-outline-primary">1</span>
            <button className="btn btn-secondary">+</button>
          </span>
          </p>
        </div>
          { selectedSize ? <button className="btn btn-danger btn-block btn-lg">В корзину</button> : null }
      </div>
      </section>
  );
};

export default Item;
