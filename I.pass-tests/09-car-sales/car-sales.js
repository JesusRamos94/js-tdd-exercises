const sales = (data) => {
  if (
    isNotValidParam(data)
  ) {
    throw new Error("Invalid param");
  }

  const result = Object.values(
    data.reduce((acc, current) => {
      acc[current.make] = acc[current.make]
        ? { ...current, price: current.price + acc[current.make].price }
        : current;
      return acc;
    }, {})
  );

  const newData = {};

  result.map((e) => (newData[e.make] = e.price));
  return newData;
};

module.exports = {
  sales,
};
const isNotValidParam =(data) => {
  return isNotAnArray(data) ||
    isNotAnEmptyArray(data) ||
    valuesAreNotAString(data);
}

const valuesAreNotAString =(data)  =>{
  return data.some(
    (e) => typeof e !== "object" ||
      typeof e.make !== "string" ||
      typeof e.model !== "string" ||
      typeof e.colour !== "string" ||
      typeof e.price !== "number" ||
      e.make.length === 0 ||
      e.model.length === 0 ||
      e.colour.length === 0
  );
}

const isNotAnEmptyArray =(data)  =>{
  return data.length === 0;
}

const isNotAnArray =(data) => {
  return !Array.isArray(data);
}
