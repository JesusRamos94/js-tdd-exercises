const getEven = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }

  return numbers.filter((number) => number % 2 === 0);
};

module.exports = { getEven };

const isNotValidParam = (array) => {
  return isNotAnArray(array) || isNotEmptyArray(array) || isNotANumber(array);
};

const isNotANumber = (array) => {
  return array.some((i) => typeof i !== "number" || i.length === 0 || i === null);
};

const isNotEmptyArray = (array) => {
  return array.length === 0;
};

const isNotAnArray = (array) => {
  return !Array.isArray(array);
};
