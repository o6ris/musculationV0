import React, { useEffect, useState } from "react";
import AdminSearchBar from "@components/AdminSearchBar/AdminSearchBar";
import apiConnection from "@services/apiConnection";
import validateForm from "@services/formValidator";
import VehicleForm from "@components/VehicleForm/VehicleForm";
import "./adminStyle.css";

function Admin() {
  const [vehiclesList, setVehiclesList] = useState();
  const [displayEditForm, setDisplayEditForm] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [vehicle, setVehicle] = useState({
    name: "",
    picture: "",
    fuel: "",
    gearbox: "",
    price: "",
  });
  const [displayError, setDisplayError] = useState(false);
  const { status, errorMessage } = validateForm(vehicle);

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

  const listAllVehicles = () => {
    apiConnection
      .get(`/vehicles`)
      .then((allVehicles) => setVehiclesList(allVehicles.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    listAllVehicles();
  }, []);

  const getOneVehicle = (id) => {
    apiConnection
      .get(`/vehicles/${id}`)
      .then((oneVehicle) => {
        setDisplayEditForm(true);
        setVehicle(oneVehicle.data);
      })
      .catch((err) => console.error(err));
  };

  const handleAddVehicle = (e) => {
    e.preventDefault();
    if (status) {
      apiConnection
        .post(`./vehicles`, vehicle)
        .then(() => {
          setVehicle({
            name: "",
            picture: "",
            fuel: "",
            gearbox: "",
            price: "",
          });
          listAllVehicles();
          setDisplayAddForm(false);
        })
        .catch((err) => console.error(err));
    } else {
      setDisplayError(true);
    }
  };

  const handleEditVehicle = (e) => {
    e.preventDefault();
    if (status) {
      apiConnection
        .put(`/vehicles/${vehicle?.id}`, vehicle)
        .then(() => {
          setDisplayEditForm(false);
        })
        .catch((err) => console.error(err));
    } else {
      setDisplayError(true);
    }
  };

  const handleDisplayAddForm = () => {
    if (displayEditForm) {
      setDisplayEditForm(false);
    }
    setVehicle({
      name: "",
      picture: "",
      fuel: "",
      gearbox: "",
      price: "",
    });
    setDisplayAddForm(true);
  };

  const handleCancelButton = (setDisplayForm) => {
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
      <h1>Search your Vehicle</h1>
      <AdminSearchBar
        getOneVehicle={getOneVehicle}
        handleCancelButton={() => handleCancelButton(setDisplayAddForm)}
        vehiclesList={vehiclesList}
      />
      <button
        onClick={handleDisplayAddForm}
        type="button"
        className="addVehicleButton"
      >
        + Add new vehicle
      </button>
      {displayEditForm && (
        <>
          <VehicleForm
            handleCancelButton={() => handleCancelButton(setDisplayEditForm)}
            handleButtonAction={handleEditVehicle}
            handleInputOnChange={handleInputOnChange}
            vehicle={vehicle}
            buttonText="Update"
          />
          {displayError && <div>{errorMessage}</div>}
        </>
      )}
      {displayAddForm && (
        <>
          <VehicleForm
            handleCancelButton={() => handleCancelButton(setDisplayAddForm)}
            handleButtonAction={handleAddVehicle}
            handleInputOnChange={handleInputOnChange}
            vehicle={vehicle}
            buttonText="Add"
          />
          {displayError && <div>{errorMessage}</div>}
        </>
      )}
    </div>
  );
}

export default Admin;
