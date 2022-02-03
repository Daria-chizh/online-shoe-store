import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchItem } from '../redux/actions/actionCreators'
import Item from "./elements/Item";
import Banner from "./common/Banner";
import Footer from "./common/Footer";

export default function ItemPage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, item } = useSelector((state) => state.loadedItem);

  useEffect(() => dispatch(fetchItem(id)), []);

  if (!item || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Banner/>
      <Item item={item} />
      <Footer/>
    </>
  );
}
