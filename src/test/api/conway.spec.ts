import Conway from "../../api/Conway";

const game: Conway = new Conway();

describe("Movies API", () => {
  it("should create a new movie", () => {
    const movieData: object = {};

    const movie: object = game.create(movieData);

    expect(movie).toEqual(movieData);
  });
});
