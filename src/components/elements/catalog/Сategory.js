import React from 'react';

const Category = (props) => {
  const { active, category, onCategorySelect } = props;
  const { title, id } = category;

  const handleClick = () => onCategorySelect(id);

  return (
    <div className="info-catalog">
      <a className={ active ? "nav-link active" : "" } onClick={handleClick}>{title}</a>
    </div>
  );
};

export default Category;


