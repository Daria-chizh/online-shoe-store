import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CatalogItem from "./CatalogItem";
import { fetchCatalogItems } from '../../../redux/actions/actionCreators'

export default function CatalogList(props) {
  const { categoryId, search } = props;

  const dispatch = useDispatch();
  const [currentOffset, setCurrentOffset] = useState();

  const { loading, items, fullyLoaded } = useSelector((state) => state.catalogItems);

  useEffect(() => {
    setCurrentOffset(0);
    dispatch(fetchCatalogItems(categoryId, 0, search));
  }, [categoryId, search]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!items || !items.length) {
    return null;
  }

  const onLoadingElse = ()  => {
    const newOffset = currentOffset + 6;
    setCurrentOffset(newOffset);
    dispatch(fetchCatalogItems(categoryId, newOffset, search));
  };

  return (
    <>
      <ul style={{ listStyleType: 'none', width: 1100, margin: 'auto'}}>
        {
          items.map((item) => <CatalogItem item={item} key={item.id} />)
        }
      </ul>
      {
        !fullyLoaded && <button className="loading-else" onClick={onLoadingElse}>Загрузить ещё</button>
      }
    </>
  );
}
