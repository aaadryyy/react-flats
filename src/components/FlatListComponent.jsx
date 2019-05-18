import React from "react";
import FlatComponent from "./FlatComponent";

class FlatListComponent extends React.Component {
  render() {
    const { flats, onClick } = this.props;
    return (
      <div className="flat-list">
        {flats.map((flat, key) => {
          return <FlatComponent onClick={onClick} flat={flat} key={key} />;
        })}
      </div>
    );
  }
}

export default FlatListComponent;
