const addNumbers = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.some((i) => typeof i !== "number") ||
    numbers.length === 0
  ) {
    throw new Error("Invalid param");
  }

  let total = 0;

  for (const number of numbers) {
    total = total + number;
  }

  return total;
};

module.exports = {
  addNumbers,
};
