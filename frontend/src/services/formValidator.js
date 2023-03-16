const validateForm = (vehicle) => {
  if (vehicle.name === null || vehicle.name.length < 2) {
    return {
      status: false,
      errorMessage: "2 characters minimum in name field",
    };
  }
  if (vehicle.picture.length === 0) {
    return {
      status: false,
      errorMessage: "picture field cannot be empty",
    };
  }
  if (vehicle.price.length === 0) {
    return {
      status: false,
      errorMessage: "price field cannot be empty",
    };
  }
  return { status: true };
};

export default validateForm;
