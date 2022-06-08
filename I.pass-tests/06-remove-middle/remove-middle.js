const removeMiddle = (words) => {
  if (
    !Array.isArray(words) ||
    words.some((i) => typeof i !== "string") ||
    words.length === 0
  ) {
    throw new Error("Invalid param");
  }

  const amount = words.length / 2;
  const approximate = Math.round(amount - 1);
  const indexRemove = words[approximate];
  const newWord = words.filter((word) => word === indexRemove);
  words.splice(approximate, 1);

  return newWord;
};

module.exports = {
  removeMiddle,
};
