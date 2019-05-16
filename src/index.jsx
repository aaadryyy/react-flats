import React from "react";
import ReactDOM from "react-dom";
import FlatListComponent from "./components/FlatListComponent";
import MapComponent from "./components/MapComponent";
import "../assets/stylesheets/application.scss";

const App = () => {
  return (
    <div>
      <div className="flat-list">
        <FlatListComponent />
      </div>
      <div>
        <MapComponent />
      </div>
    </div>
  );
};

const root = document.getElementById("root");
if (root) {
  ReactDOM.render(<App />, root);
}
