import React, { useState } from "react";
import Catalog from "./elements/catalog/Catalog";
import Banner from "./common/Banner";
import CatalogTitle from "./common/CatalogTitle";
import Footer from "./common/Footer";

export default function CatalogPage() {
  const [search, setSearch] = useState();

  const handleSearch = (event) => {
    setSearch(event.target.search.value);
    event.preventDefault();
  };

  return (
    <>
      <Banner/>
      <CatalogTitle />

      <form data-id="search-form" className="header-controls-search-form form-inline invisible" onSubmit={handleSearch}>
        <input className="form-control" placeholder="Поиск" name="search" />
      </form>

      <div className="title-catalog">
        <Catalog search={search} />
      </div>

      <Footer/>
    </>
  )
}
