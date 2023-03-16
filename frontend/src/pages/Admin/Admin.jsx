import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";
import "./adminStyle.css";

function Admin() {
  const [vehiclesList, setVehiclesList] = useState();
  const [isDisplay, setIsDisplay] = useState(false);
  const [searchVehicle, setSearchVehicle] = useState("");
  // console.log(isDisplay);

  const listAllVehicles = () => {
    apiConnection
      .get(`/vehicles`)
      .then((allVehicles) => setVehiclesList(allVehicles.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    listAllVehicles();
  }, []);

  const handleDisplayVehicle = () => {
    setIsDisplay(!isDisplay);
  };

  return (
    <div>
      <form>
        <input type="text" onChange={(e) => setSearchVehicle(e.target.value)} />
        <button type="button" onClick={handleDisplayVehicle}>
          Show vehicles
        </button>
        {(searchVehicle.length > 0 || isDisplay) && vehiclesList && (
          <ul className="vehicleList">
            {vehiclesList
              .filter((vehicle) =>
                vehicle.name.toLowerCase().includes(searchVehicle)
              )
              .map((vehicle) => (
                <button type="button">{vehicle.name}</button>
              ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default Admin;
