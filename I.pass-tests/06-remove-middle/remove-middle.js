const removeMiddle = (words) => {
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
