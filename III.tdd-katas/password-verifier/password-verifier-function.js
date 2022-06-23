const verify = (password) => {

    isNotNull(password);

    const required = [atLeastOneLowercaseLetter];
    const validations = [
      beLargerThan8,
      atLeastOneCapitalLetter,
      atLeastOneDigit,
    ];

    const requiredErrors = required
      .map((req) => req(password))
      .filter((err) => err !== "");

    const validationsErrors = validations
      .map((req) => req(password))
      .filter((err) => err !== "");

    if (
      (!requiredErrors.length && !validationsErrors.length) ||
      (!requiredErrors.length &&
        validationsErrors.length >= validations.length - 1)
    ) {
      return "OK";
    }

    if (!requiredErrors.length && validationsErrors.length >= 1) {
      const msg = validationsErrors.join();
      throw new Error(msg);
    } else {
      const msg = requiredErrors.join();
      throw new Error(msg);
    }

}


const beLargerThan8 = (password) => {
    return password.length < 8
      ? "Your Password must be a least 8 characters"
      : "";
  };
  
  const isNotEmptyPassword = (password) => {
    return password.length === 0 ? "Your cannot enter an empty password" : "";
  };
  
  const atLeastOneCapitalLetter = (password) => {
    return password.search(/[A-Z]/) < 0
      ? "Your password must contain at least one uppercase letter."
      : "";
  };
  
  const atLeastOneLowercaseLetter = (password) => {
    return password.search(/[a-z]/) < 0
      ? "Your password must contain at least one lowercase letter."
      : "";
  };
  
  const atLeastOneDigit = (password) => {
    return password.search(/[0-9]/) < 0
      ? "Your password must contain at least one digit"
      : "";
  };
  
  const isNotNull = (password) => {
    if (password === null) {
      throw new Error("Your password must contain letters and numbers");
    }
  };
  
  module.exports = {
    verify,
  };
  