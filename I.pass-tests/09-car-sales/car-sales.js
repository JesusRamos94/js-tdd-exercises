const sales = (data) => {
  if (
    !Array.isArray(data) ||
    data.length === 0 ||
    data.some((e) => typeof e !== "objet") ||
    data.some((e) => typeof e.make !== "string") ||
    data.some((e) => typeof e.model !== "string") ||
    data.some((e) => typeof e.colour !== "string") ||
    data.some((e) => typeof e.price !== "number")
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
