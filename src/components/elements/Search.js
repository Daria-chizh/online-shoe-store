import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

import find from "../../img/find.png";

export default function Search() {
  const [expanded, setExpanded] = useState();
  const [searchText, setSearchText] = useState();
  const navigate = useNavigate();

  const handleShowSearch = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }

    if (searchText) {
      navigate(`/catalog.html?search=${searchText}`);
      return;
    }

    // search text is empty
    setExpanded(false);
  };

  const handleValueText = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  return (
    <>
      <div>
        <span><img src={find} className="find" onClick={handleShowSearch} /></span>
      </div>
      {
        expanded === true
          ? <div className="header-controls-search-form form-inline invisible">
              <input type="text" className="form-control" placeholder="Поиск" value={searchText} onChange={handleValueText} />
            </div>
          : null
      }
    </>
  )
}
