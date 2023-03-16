import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";
import VehicleCardTemplate from "@components/VehicleCard/VehicleCardTemplate";
import "@pages/Home/homeStyle.css";

export default function Home() {
  const [vehicles, setVehicles] = useState();

  const getAllVehicles = () => {
    apiConnection
      .get(`/vehicles`)
      .then((allVehicles) => setVehicles(allVehicles.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAllVehicles();
  }, []);
  return (
    <header className="App-header">
      <h1>Rent my car</h1>
      <section>
        <ul className="cardContainer">
          {vehicles?.map((vehicle) => (
            <li className="vehicleCardList">
              <VehicleCardTemplate data={vehicle} />
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
}
