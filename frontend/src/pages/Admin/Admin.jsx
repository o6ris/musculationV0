import React, { useState } from "react";
import AdminSearchBar from "@components/AdminSearchBar/AdminSearchBar";
import apiConnection from "@services/apiConnection";
import validateForm from "@services/formValidator";
import "./adminStyle.css";
import VehicleForm from "@components/VehicleForm/VehicleForm";

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

  const handleCancelButton = () => {
    setVehicle({
      name: "",
      picture: "",
      fuel: "",
      gearbox: "",
      price: "",
    });
    setDisplayForm(false);
  };

  return (
    <div>
      <AdminSearchBar getOneVehicle={getOneVehicle} />
      {displayForm && (
        <>
          <VehicleForm
            handleCancelButton={handleCancelButton}
            handleButtonAction={handleEditVehicle}
            handleInputOnChange={handleInputOnChange}
            vehicle={vehicle}
            buttonText="Update"
          />
          {displayError && <div>{errorMessage}</div>}
        </>
      )}
    </div>
  );
}

export default Admin;
