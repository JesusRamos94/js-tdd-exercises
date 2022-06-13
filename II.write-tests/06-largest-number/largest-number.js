const getLargestNumber = (array) => {
  if (isNotValidParam(array)) {
    throw new Error("Invalid param");
  }
  return Math.max(...array);
};

module.exports = { getLargestNumber };

const isNotValidParam = (array) => {
  return isNotAnArray(array) || isNotEmptyArray(array) || isNotANumber(array);
};

const isNotANumber = (array) => {
  return array.some(
    (i) => typeof i !== "number" || i.length === 0 || i === null
  );
};

const isNotEmptyArray = (array) => {
  return array.length === 0;
};

const isNotAnArray = (array) => {
  return !Array.isArray(array);
};
