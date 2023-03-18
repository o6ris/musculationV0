/* eslint-disable react/prop-types */
import React, { useState } from "react";

import "./adminSearchBarStyle.css";

function AdminSearchBar({ vehiclesList, getOneVehicle, handleCancelButton }) {
  const [isDisplay, setIsDisplay] = useState(false);
  const [searchVehicle, setSearchVehicle] = useState("");

  const selectVehicle = (id) => {
    getOneVehicle(id);
    setIsDisplay(false);
    handleCancelButton();
  };

  const handleDisplayVehicle = () => {
    setIsDisplay(!isDisplay);
  };
  return (
    <form className="searchContainer">
      <label className="searchBar">
        <input type="text" onChange={(e) => setSearchVehicle(e.target.value)} />
        <button type="button" onClick={handleDisplayVehicle}>
          Show vehicles
        </button>
      </label>
      {(searchVehicle.length > 0 || isDisplay) && vehiclesList && (
        <ul className="vehicleList">
          {vehiclesList
            .filter((vehicle) =>
              vehicle.name.toLowerCase().includes(searchVehicle)
            )
            .map((vehicle) => (
              <button
                type="button"
                key={vehicle.id}
                onClick={() => selectVehicle(vehicle.id)}
              >
                {vehicle.name}
              </button>
            ))}
        </ul>
      )}
    </form>
  );
}

export default AdminSearchBar;
