const addOne = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.some((i) => typeof i === "null") ||
    numbers.some((i) => typeof i === "boolean") ||
    numbers.some((i) => typeof i === "undefined") ||
    numbers.length === 0 ||
    numbers.some((i) => typeof i === "string") ||
    numbers.some((i) => typeof i === "object")
  ) {
    throw new Error("Invalid param");
  }

  return numbers.map((n) => n + 1);
};

module.exports = {
  addOne,
};

