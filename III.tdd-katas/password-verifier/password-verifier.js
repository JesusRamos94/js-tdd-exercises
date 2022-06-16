const verify = (password) => {
 
    if(typeof password !== "string"){
        throw new Error("Your password must contain letters and numbers")
    }

  if (isNotEmptyPassword(password)) {
    throw new Error("Your cannot enter an empty password");
  }
  if (beLargerThan8(password)) {
    throw new Error("Your Password must be a least 8 characters");
  }

  if (atLeastOneLowercaseLetter(password)) {
    throw new Error("Your password must contain at least one lowercase letter.");
  }

  if (atLeastOneCapitalLetter(password)) {
    throw new Error("Your password must contain at least one uppercase letter.");
  }

  if (atLeastOneDigit(password)) {
    throw new Error("Your password must contain at least one digit");
  }


  return "OK";
};

// console.log(verify("Aeiou123"));

module.exports = {
  verify,
};

const atLeastOneDigit = (password) => {
    return password.search(/[0-9]/) < 0;
}

const atLeastOneLowercaseLetter = (password)  =>{
    return password.search(/[a-z]/) < 0;
}

const atLeastOneCapitalLetter = (password) => {
    return password.search(/[A-Z]/) < 0;
}

const isNotEmptyPassword = (password)  =>{
    return password.length === 0;
}

const beLargerThan8 = (password) => {
    return password.length < 8;
}

