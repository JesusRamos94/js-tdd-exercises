class PasswordVerifier { 
  constructor(password){
  this.password = password
  }

  static verify (password)  {
    
    if (isNotAString(password)) {
      throw new Error("Your password must contain letters and numbers");
    }
  
    if (isNotEmptyPassword(password)) {
      throw new Error("Your cannot enter an empty password");
    }
    
    if (beLargerThan8(password)) {
      throw new Error("Your Password must be a least 8 characters");
    }
  
    if (atLeastOneLowercaseLetter(password)) {
      throw new Error(
        "Your password must contain at least one lowercase letter."
      );
    }
  
    if (atLeastOneCapitalLetter(password)) {
      throw new Error(
        "Your password must contain at least one uppercase letter."
      );
    }
  
    if (atLeastOneDigit(password)) {
      throw new Error("Your password must contain at least one digit");
    }
  
    return "OK";
  };

}


const atLeastOneDigit = (password) => {
  return password.search(/[0-9]/) < 0;
};

const atLeastOneLowercaseLetter = (password) => {
  return password.search(/[a-z]/) < 0;
};

const atLeastOneCapitalLetter = (password) => {
  return password.search(/[A-Z]/) < 0;
};

const isNotEmptyPassword = (password) => {
  return password.length === 0;
};

const beLargerThan8 = (password) => {
  return password.length < 8;
};

const isNotAString = (password) => {
  return typeof password !== "string";
};

//  const pass = new PasswordVerifier("");

// console.log(PasswordVerifier.verify(pass.password));

module.exports = {
  PasswordVerifier
};

