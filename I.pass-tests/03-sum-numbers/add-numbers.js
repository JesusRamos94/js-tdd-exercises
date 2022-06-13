const addNumbers = (numbers) => {
  if (isNotValidParam(numbers)) {
    throw new Error("Invalid param");
  }

  return numbers.reduce(addAllElements);
};

module.exports = {
  addNumbers,
};
const isNotValidParam = (numbers) => {
  return (
    isNotAnArray(numbers) || isNotANumber(numbers) || isNotEmptyArray(numbers)
  );
};

const isNotEmptyArray = (numbers) => {
  return numbers.length === 0;
};

const isNotANumber = (numbers) => {
  return numbers.some((i) => typeof i !== "number");
};

const isNotAnArray = (numbers) => {
  return !Array.isArray(numbers);
};
const addAllElements = (acc, curr) => acc + curr;


