/* eslint-disable react/prop-types */
import React from "react";

function VehicleForm({
  vehicle,
  handleInputOnChange,
  handleButtonAction,
  buttonText,
}) {
  return (
    <div>
      <form className="formVehicleContainer">
        <input
          type="text"
          name="name"
          required
          value={vehicle?.name}
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="picture"
          required
          value={vehicle?.picture}
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
        <select
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
          name="fuel"
          required
          value={vehicle.fuel}
        >
          <option value={0}>Essence</option>
          <option value={1}>Diesel</option>
        </select>
        <select
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
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
          onChange={(e) => handleInputOnChange(e.target.name, e.target.value)}
        />
        <button onClick={handleButtonAction} type="submit">
          {buttonText}
        </button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}

export default VehicleForm;
