import React from 'react';
import TopSales from "./elements/topsales/TopSales";
import Catalog from "./elements/catalog/Catalog";
import Footer from "./common/Footer";
import Banner from "./common/Banner";
import CatalogTitle from "./common/CatalogTitle";


export default function HomePage() {
  return (
    <>
      <Banner/>
      <div className="main-content">
        <div className="total-super">
          <span className="name-catalog">Хиты продаж!</span>
        </div>
        <TopSales />
      </div>

      <div className="title-catalog">
        <CatalogTitle/>
        <Catalog />
      </div>
      <Footer/>
    </>
  )
}
