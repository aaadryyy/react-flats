import React from "react";
import ReactDOM from "react-dom";
import FlatListComponent from "./components/FlatListComponent";
import MapContainer from "./components/MapContainer";
import "../assets/stylesheets/application.scss";
import flats from "../data/flats";

class App extends React.Component {
  state = {
    flats: flats,
    selectedFlat: {
      name: "Bohemian and Chic in Paris",
      imageUrl:
        "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat6.jpg",
      price: 90,
      priceCurrency: "EUR",
      lat: 48.827855,
      lng: 2.350774
    }
  };

  handleSelect = flat => {
    // console.log(flat);
    this.setState({ selectedFlat: flat });
    // console.log(this.state);
  };
  render() {
    const { flats, selectedFlat } = this.state;
    return (
      <div>
        <FlatListComponent flats={flats} onClick={this.handleSelect} />
        <MapContainer
          flat={{ center: { lat: selectedFlat.lat, lng: selectedFlat.lng } }}
        />
      </div>
    );
  }
}

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
