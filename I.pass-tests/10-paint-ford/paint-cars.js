const paintShop = (cars, colour) => {
  if (isNotValidParam(cars, colour)) {
    throw new Error("Invalid param");
  }

  const newCars = JSON.parse(JSON.stringify(cars));
  newCars[0].colour = colour;
  return newCars;
};

module.exports = {
  paintShop,
};
const isNotValidParam = (cars, colour) => {
  return (
    isNotAnArray(cars) ||
    isNotAString(colour) ||
    newFunction(cars) ||
    isNotValidValues(cars)
  );
}

const newFunction=(cars)  =>{
  return cars.length === 0;
}

const isNotValidValues=(cars) => {
  return cars.some(
    (e) =>
      e === null ||
      typeof e !== "object" ||
      typeof e.make !== "string" ||
      typeof e.model !== "string" ||
      typeof e.colour !== "string"
  );
}

const isNotAString=(colour)  =>{
  return typeof colour !== "string";
}

const isNotAnArray=(cars) => {
  return !Array.isArray(cars);
}
