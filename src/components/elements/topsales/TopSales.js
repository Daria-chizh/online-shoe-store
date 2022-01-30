import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TopSaleItem from "./TopSaleItem";
import { fetchTopSales } from '../../../redux/actions/actionCreators'

export default function TopSales() {
  const dispatch = useDispatch();

  const { loading, error, items } = useSelector((state) => state.topSales);

  useEffect(() => dispatch(fetchTopSales()), []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <ul style={{ listStyleType: 'none' }}>
      {
        items.map((item) => <TopSaleItem item={item} key={item.id} />)
      }
    </ul>
  );
}
