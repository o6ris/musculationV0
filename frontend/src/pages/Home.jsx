import React, { useEffect, useState } from "react";
import apiConnection from "@services/apiConnection";

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
        <ul>
          {vehicles?.map((vehicle) => (
            <li>
              <div>
                <h2>{vehicle.name}</h2>
                <img src={vehicle.picture} alt={vehicle.name} />
                <ul>
                  {vehicle.fuel === 0 ? <li>Essence</li> : <li>Diesel</li>}
                  {vehicle.gearbox === 0 ? (
                    <li>Manuel</li>
                  ) : (
                    <li>Automatique</li>
                  )}
                </ul>
                <h3>{vehicle.price} €</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </header>
  );
}
