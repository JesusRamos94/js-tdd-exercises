// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (array) => {
  if (isNotValidParam(array)) {
    throw new Error("Invalid param");
  }

  const newArray = array.filter((e) => typeof e === "number");

  const total = newArray.reduce((acc, curr) => {
    return (acc += curr);
  });

  return total / newArray.length;
};

module.exports = {
  average,
};
const isNotValidParam = (array) => {
  return isNotAnArray(array) || isNotEmptyArray(array);
};

const isNotEmptyArray = (array) => {
  return array.length === 0;
};

const isNotAnArray = (array) => {
  return !Array.isArray(array);
};
