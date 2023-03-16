import React, { useState } from "react";
import AdminSearchBar from "@components/AdminSearchBar/AdminSearchBar";
import apiConnection from "@services/apiConnection";
import validateForm from "@services/formValidator";
import "./adminStyle.css";

function Admin() {
  const [displayForm, setDisplayForm] = useState(false);
  const [vehicle, setVehicle] = useState({
    name: "",
    picture: "",
    fuel: "",
    gearbox: "",
    price: "",
  });
  const [displayError, setDisplayError] = useState(false);

  // Fonction qui gère le changement d'état des inputs
  /**
   * @param {string} place
   * @param {string} value
   */
  const handleInputOnChange = (place, value) => {
    const newVehicle = { ...vehicle };
    newVehicle[place] = value;
    setVehicle(newVehicle);
  };

  const getOneVehicle = (id) => {
    apiConnection
      .get(`/vehicles/${id}`)
      .then((oneVehicle) => {
        setDisplayForm(true);
        setVehicle(oneVehicle.data);
      })
      .catch((err) => console.error(err));
  };

  const { status, errorMessage } = validateForm(vehicle);
  const handleEditVehicle = (e) => {
    e.preventDefault();
    if (status) {
      apiConnection
        .put(`/vehicles/${vehicle?.id}`, vehicle)
        .then(() => {
          setDisplayForm(false);
        })
        .catch((err) => console.error(err));
    } else {
      setDisplayError(true);
    }
  };

  return (
    <div>
      <AdminSearchBar getOneVehicle={getOneVehicle} />
      {displayForm && (
        <>
          <form className="formVehicleContainer">
            <input
              type="text"
              name="name"
              required
              value={vehicle?.name}
              onChange={(e) =>
                handleInputOnChange(e.target.name, e.target.value)
              }
            />
            <input
              type="text"
              name="picture"
              required
              value={vehicle?.picture}
              onChange={(e) =>
                handleInputOnChange(e.target.name, e.target.value)
              }
            />
            <select
              onChange={(e) =>
                handleInputOnChange(e.target.name, e.target.value)
              }
              name="fuel"
              required
              value={vehicle.fuel}
            >
              <option value={0}>Essence</option>
              <option value={1}>Diesel</option>
            </select>
            <select
              onChange={(e) =>
                handleInputOnChange(e.target.name, e.target.value)
              }
              name="gearbox"
              required
              value={vehicle.gearbox}
            >
              <option value={0}>Manual</option>
              <option value={1}>Automatic</option>
            </select>
            <input
              type="text"
              name="price"
              required
              value={vehicle?.price}
              onChange={(e) =>
                handleInputOnChange(e.target.name, e.target.value)
              }
            />
            <button onClick={handleEditVehicle} type="submit">
              Update
            </button>
            <button type="button">Cancel</button>
          </form>
          {displayError && <div>{errorMessage}</div>}
        </>
      )}
    </div>
  );
}

export default Admin;
