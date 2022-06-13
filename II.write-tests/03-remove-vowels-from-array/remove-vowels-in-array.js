const { removeVowels } = require("../02-remove-vowels/remove-vowels");

const removeVowelsForWords = (words) => {
  if (
    isNotValidParam(words)
  ) {
    throw new Error("Invalid param");
  }
  return (result = words.map((word) => {
    return removeVowels(word).replace(/[_AEIOU]/g, "");
  }));
};

console.log(removeVowelsForWords(["Irina", "Etza", "Daniel"]));

module.exports = {
  removeVowelsForWords,
};


function isNotValidParam(words) {
  return isNotAnArray(words) ||
    isNotEmptyArray(words) ||
    isNotValueParam(words);
}

function isNotValueParam(words) {
  return words.some((i) => typeof i !== "string" || i.length === 0 || i === null);
}

function isNotEmptyArray(words) {
  return words.length === 0;
}

function isNotAnArray(words) {
  return !Array.isArray(words);
}
/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
