import React from "react";

const FlatComponent = ({ flat, onClick }) => {
  return (
    <div
      onClick={() => onClick(flat)}
      className="card"
      style={{
        backgroundImage: `url(${flat.imageUrl})`
      }}
    >
      <div className="card-category">
        {flat.price} {flat.priceCurrency}
      </div>
      <div className="card-description">
        <h2>{flat.name}</h2>
      </div>
      <a className="card-link" href="#" />
    </div>
  );
};

export default FlatComponent;
