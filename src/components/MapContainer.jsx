import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import { API_KEY } from "../constants";

class MapContainer extends Component {
  render() {
    const { center } = this.props.flat;
    const zoom = 13;

    return (
      // Important! Always set the container height explicitly
      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
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
