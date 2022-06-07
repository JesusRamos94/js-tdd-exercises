const addOne = (numbers) => {
  if (!numbers || numbers === true || numbers < 0) {
    throw new Error("Invalid param");
  }

  return numbers.map((n) => n + 1);
};

module.exports = {
  addOne,
};
