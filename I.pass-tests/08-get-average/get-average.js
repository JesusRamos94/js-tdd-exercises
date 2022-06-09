// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

const average = (array) => {
  if (!Array.isArray(array) || array.length === 0) {
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
