import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Catalog from "./elements/catalog/Catalog";
import Banner from "./common/Banner";
import CatalogTitle from "./common/CatalogTitle";
import Footer from "./common/Footer";

export default function CatalogPage() {
  const [queryString] = useSearchParams();
  const [search, setSearch] = useState(queryString.get('search') || '');

  const handleSearch = (event) => {
    setSearch(event.target.search.value);
    event.preventDefault();
  };

  const handleValueText = (event) => {
    const { value } = event.target;
    setSearch(value);
  };

  return (
    <>
      <Banner/>
      <CatalogTitle />

      <form data-id="search-form" className="header-controls-search-form form-inline invisible" onSubmit={handleSearch}>
        <input className="form-control" placeholder="Поиск" name="search" value={search} onChange={handleValueText} />
      </form>

      <div className="title-catalog">
        <Catalog search={search} />
      </div>
      <Footer/>
    </>
  )
}
