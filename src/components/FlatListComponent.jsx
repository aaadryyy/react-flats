import React from "react";
import FlatComponent from "./FlatComponent";
import flats from "../../data/flats";

class FlatListComponent extends React.Component {
  render() {
    return (
      <div className="card">
        {flats.map(flat => {
          return (
            <FlatComponent
              name={flat.name}
              imageUrl={flat.imageUrl}
              price={flat.price}
              priceCurrency={flat.priceCurrency}
            />
          );
        })}
      </div>
    );
  }
}

export default FlatListComponent;
