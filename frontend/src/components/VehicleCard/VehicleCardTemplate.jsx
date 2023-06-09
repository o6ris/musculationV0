/* eslint-disable react/prop-types */
import React from "react";
import "./vehicleCardStyle.css";

function VehicleCardTemplate({ data }) {
  return (
    <div className="vehicleCard">
      <h2 className="vehicleName">{data.name}</h2>
      <div
        className="vehiclePicture"
        style={{ backgroundImage: `url(${data.picture})` }}
      />
      <ul className="vehicleDetails">
        <li>
          <span>Fuel : </span> {data.fuel === 0 ? "Essence" : "Diesel"}
        </li>
        <li>
          <span>Gearbox : </span>
          {data.gearbox === 0 ? "Manuel" : "Automatique"}
        </li>
      </ul>
      <h3>Price : {data.price} €</h3>
    </div>
  );
}

export default VehicleCardTemplate;
