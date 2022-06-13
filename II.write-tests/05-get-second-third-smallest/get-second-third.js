const getSecondThird = (array) => {
  if (
    isNotValidParam(array)
  ) {
    throw new Error("Invalid param");
  }
  const newArray = array.slice();

  newArray.sort((x, y) => x - y);

  return [newArray[1], newArray[2]];
};

module.exports = {
  getSecondThird,
};

const isNotValidParam = (array) => {
  return isNotAnArray(array) ||
    isNotEmptyArray(array) ||
    isNotANumber(array);
}

const isNotANumber = (array) => {
  return array.some((i) => typeof i !== "number" || i.length === 0 || i === null);
}

const isNotEmptyArray = (array)  =>{
  return array.length === 0;
}

const isNotAnArray = (array) => {
  return !Array.isArray(array);
}