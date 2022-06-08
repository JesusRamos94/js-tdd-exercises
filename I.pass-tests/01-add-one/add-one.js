const addOne = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.some((i) => typeof i !== "number") ||
    numbers.length === 0
  ) {
    throw new Error("Invalid param");
  }

  return numbers.map((n) => n + 1);
};

module.exports = {
  addOne,
};

