const { getRepos } = require("./async-2");
const { fetcher } = require("./fetcher");
jest.mock("./fetcher");

describe("http ok, status 200", () => {
  it("gets a list of repositories names (with mock)", () => {
    // arrange
    //fetcher.mockResolvedValue([{ name: "js-exercises" }]);
    const url = "https://api.github.com/users/kabaros/repos";
    fetcher.mockImplementation(() => {
      return Promise.resolve([{ name: "js-exercises" }]);
    });
    // act
    return getRepos(url).then((result) => {
      // assert
      expect(result).toContain("js-exercises");
    });
  });

  it("resource not found", () => {
    // arrange
    //fetcher.mockRejectedValue([{ satus: 404 }]);
    const url = "https://api.github.com/users/kabaros/repos";
    fetcher.mockImplementation(() => {
      return Promise.reject({ status: 404 });
    });

    // act
    return getRepos(url).catch((result) => {
      // assert
      expect(result.status).toEqual(404);
    });
  });
});