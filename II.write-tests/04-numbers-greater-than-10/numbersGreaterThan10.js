const byGreaterThan10 = (number) => number > 10;
const largerThanTe = (array) => {
  if (
    isNotValidParam(array)
  ) {
    throw new Error("Invalid param");
  }
  return array.filter(byGreaterThan10);
};

module.exports = {
  largerThanTe,
};

const isNotValidParam = (array) => {
  return isNotAnArray(array) ||
    isNotEmptyArray(array) ||
    isNotANumber(array);
}

const isNotANumber = (array) => {
  return array.some((i) => typeof i !== "number" || i.length === 0);
}

const isNotEmptyArray = (array)  =>{
  return array.length === 0;
}

const isNotAnArray = (array) => {
  return !Array.isArray(array);
}

