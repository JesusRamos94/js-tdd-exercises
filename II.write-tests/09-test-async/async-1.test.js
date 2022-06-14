const fetch = require("node-fetch");
const { getRepos } = require("./async-1");
jest.mock("node-fetch");

describe("given the getRepos Function", () => {
  it("Given the http query with json Object will return a resolved promise", () => {
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

  it("given the http query will return resource not found Status 404", () => {
    // arrange
    const url = "";
    fetch.mockImplementation(() => {
      return Promise.reject({ status: 404 });
    });
    // act && assert
    return getRepos(url).catch((result) => {
      expect(result.status).toEqual(404);
    });
  });
});
