/* eslint-disable react/prop-types */
import React from "react";
import "./vehicleFormStyle.css";

function VehicleForm({
  vehicle,
  handleInputOnChange,
  handleButtonAction,
  handleCancelButton,
  buttonText,
}) {
  return (
    <div>
      <form className="formVehicleContainer">
        <input
          className="field"
          type="text"
          name="name"
          required
          value={vehicle?.name}
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
        <input
          className="field"
          type="text"
          name="picture"
          required
          value={vehicle?.picture}
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
        {vehicle?.picture.length > 0 && (
          <div
            className="vehicleFormPicture"
            style={{ backgroundImage: `url(${vehicle?.picture})` }}
          />
        )}
        <div className="formSelect">
          <select
            onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
            name="fuel"
            required
            value={vehicle.fuel}
          >
            <option value="">--Fuel--</option>
            <option value={0}>Essence</option>
            <option value={1}>Diesel</option>
          </select>
          <select
            onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
            name="gearbox"
            required
            value={vehicle.gearbox}
          >
            <option value="">--Gearbox--</option>
            <option value={0}>Manual</option>
            <option value={1}>Automatic</option>
          </select>
          <input
            type="text"
            name="price"
            required
            value={vehicle?.price}
            onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
          />
        </div>
        <div className="formButton">
          <button onClick={handleButtonAction} type="submit">
            {buttonText}
          </button>
          <button onClick={handleCancelButton} type="button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default VehicleForm;
