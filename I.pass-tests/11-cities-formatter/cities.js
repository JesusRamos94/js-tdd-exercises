const formatCities = (capital, transform) => {
  if (
    isNotAValidParam(capital, transform) 
  ) {
    throw new Error("Invalid param");
  }
  return capital.map(parametersForTheFunction(transform));
};

module.exports = {
  formatCities,
};
const isNotAValidParam = (capital, transform)=> {
  return isNotAnArray(capital) ||
    isNotEmptyArray(capital) ||
    isNotValidValue(capital) ||
    isNotAFunction(transform);
}

const isNotAFunction =(transform)=> {
  return typeof transform !== "function";
}

const isNotValidValue =(capital)=> {
  return capital.some(
    (e) => typeof e !== "object" ||
      e === 0 ||
      e === null ||
      typeof e.city !== "string" ||
      typeof e.country !== "string"
  );
}

const isNotEmptyArray =(capital)=> {
  return capital.length === 0;
}

const isNotAnArray =(capital)=> {
  return !Array.isArray(capital);
}

function parametersForTheFunction(transform) {
  return (e) => transform(e);
}

