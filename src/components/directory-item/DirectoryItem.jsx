import "./DirectoryItem.styles.scss";

import React from "react";

const DirectoryItem = (category) => {
  const { id, imageUrl, title } = category.category;
  
  return (
    <div className="directory-container" key={id}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
