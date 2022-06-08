const secondLargest = (numbers) => {
  if (
    !Array.isArray(numbers) ||
    numbers.some((i) => typeof i !== "number") ||
    numbers.length <= 1
  ) {
    throw new Error("Invalid param");
  }
  numbers.sort((a, b) => a - b);

  return numbers[numbers.length - 2];
};

module.exports = {
  secondLargest,
};
