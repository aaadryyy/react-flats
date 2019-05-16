import React from "react";

const FlatComponent = ({ name, imageUrl, price, priceCurrency }) => {
  return (
    <div className="card-trip">
      <img src={imageUrl} />
      <div className="card-trip-infos">
        <div>
          <h2>{name}</h2>
        </div>
        <h2 className="card-trip-pricing">
          {priceCurrency}
          {price}
        </h2>
      </div>
    </div>
  );
};

export default FlatComponent;
