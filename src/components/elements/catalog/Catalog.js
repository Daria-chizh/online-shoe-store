import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from "./Сategory";
import { fetchCategories } from '../../../redux/actions/actionCreators'
import CatalogList from "./CatalogList";

export default function Catalog(props) {
  const dispatch = useDispatch();

  const { search } = props;

  const [activeId, setActiveId] = useState();

  const { error, items } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const onCategorySelect = (selectedId) => {
    setActiveId(selectedId);
  };

  return (
    <ul>
      {
        items.map(
          (category) => <Category category={category} key={category.id} active={activeId === category.id} onCategorySelect={onCategorySelect}/>
        )
      }
      { activeId !== undefined && <CatalogList categoryId={activeId} search={search} /> }
    </ul>
  );
}
