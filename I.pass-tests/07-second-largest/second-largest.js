const secondLargest = (numbers) => {
  if (
    isNotValidParam(numbers)
  ) {
    throw new Error("Invalid param");
  }
  numbers.sort((a, b) => a - b);

  return numbers[numbers.length - 2];
};

module.exports = {
  secondLargest,
};
const isNotValidParam = (numbers)=> {
  return isNotArray(numbers) ||
    valuesAreNotAString(numbers) ||
    isSmallerEqualthanOne(numbers);
}

const isSmallerEqualthanOne = (numbers) =>{
  return numbers.length <= 1;
}

const valuesAreNotAString = (numbers) =>{
  return numbers.some((i) => typeof i !== "number");
}

const isNotArray = (numbers)=> {
  return !Array.isArray(numbers);
}

