import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

class MapContainer extends Component {
  render() {
    const { center } = this.props.flat;
    const zoom = 13;
    console.log(center);

    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAa-AreGMQhpMlVH2qOuZwsWlLRqn0CF5Q" }}
          center={center}
          zoom={zoom}
        >
          <Marker />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;
