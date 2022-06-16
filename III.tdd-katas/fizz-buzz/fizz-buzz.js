const fizzbuzz = (numbers) => {
    if(isNotANumber(numbers)){
        throw new Error("invalid param");
    }


  const array = [];
  for (let i = 1; i <= numbers; i++) {
    conditionsFizzBuzz(i, array);
  }
  return array.toString();
};

module.exports = {
  fizzbuzz,
};
const isNotANumber = (numbers) => {
    return typeof numbers !== "number";
}

const conditionsFizzBuzz = (i, array) => {
    if (i % 3 === 0 && i % 5 === 0) {
        array.push("Fizz-Buzz");
    } else if (i % 3 === 0) {
        array.push("Fizz");
    } else if (i % 5 === 0) {
        array.push("Buzz");
    } else if (i.toString().includes(3)) {
        array.push("Fizz");
    } else if (i.toString().includes(5)) {
        array.push("Buzz");
    } else {
        array.push(i);
    }
}

console.log(fizzbuzz(25))

