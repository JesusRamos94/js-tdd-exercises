const greetPeople = (people) => {
  if (isNotValidParam(people)) {
    throw new Error("Invalid param");
  };

  let greeting = "Hello";

  people.forEach((person) => (greeting = `${greeting} ${person}`));

  return greeting;
};

module.exports = {
  greetPeople,
};

const isNotValidParam = (people) => {
  return (
    isNotAnArray(people) || isNotEmptyArray(people) || isNotAString(people)
  );
};

const isNotAString = (people) => {
  return people.some(
    (i) => typeof i !== "string" || i === null || i.length === 0
  );
};

const isNotEmptyArray = (people) => {
  return people.length === 0;
};

const isNotAnArray = (people) => {
  return !Array.isArray(people);
};
/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
