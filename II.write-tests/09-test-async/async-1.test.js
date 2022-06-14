const fetch = require("node-fetch");
const { getRepos } = require("./async-1");
jest.mock("node-fetch");

describe("given the getRepos Function", () => {
  it("http ok, status 200", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    fetch.mockImplementation(() => {
      return Promise.resolve({
        json: () => [{ name: "aws-lambda-starter" }, { name: "dom-ajax-repo" }],
      });
    });
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("aws-lambda-starter");
      expect(result).toContain("dom-ajax-repo");
    });
  });

  it("resource not found", () => {
    // arrange
    const url = "";
    fetch.mockImplementation(() => {
      return Promise.reject({
        json: () => [{ error: 404 }],
      });
    });
    // act && assert
    return getRepos(url).catch((result) => {
      expect(result).rejects.toThrow("error");
    });
  });
});
