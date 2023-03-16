/* eslint-disable react/prop-types */
import React from "react";

function VehicleCardTemplate({ data }) {
  return (
    <div>
      <div>
        <h2>{data.name}</h2>
        <img src={data.picture} alt={data.name} />
        <ul>
          {data.fuel === 0 ? <li>Essence</li> : <li>Diesel</li>}
          {data.gearbox === 0 ? <li>Manuel</li> : <li>Automatique</li>}
        </ul>
        <h3>{data.price} €</h3>
      </div>
    </div>
  );
}

export default VehicleCardTemplate;
