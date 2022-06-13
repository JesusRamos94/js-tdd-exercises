const removeVowels = (word) => {
if(isNotValidParam(word) ) {
  throw new Error("Invalid param");
}
  const characters = word.split("");

  const result = [];

  characters.forEach((character) => {
    if (characterType(character)) {
      return result.push("_");
    } else {
      return result.push(character);
    }
  });

  return result.join("");
};

module.exports = {
  removeVowels,
};

const isNotValidParam = (word) => {
  return isNotAString(word) || isNotAEmptyString(word);
}

const isNotAEmptyString = (word) => {
  return word.length === 0;
}

const isNotAString = (word) => {
  return typeof word !== "string";
}

const characterType = (character) => {
  return (
    character === "a" ||
    character === "o" ||
    character === "i" ||
    character === "e" ||
    character === "u"
  );
}
/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
