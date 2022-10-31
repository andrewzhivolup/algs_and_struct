const linearSearch = require("./1_linear_search");

describe("Линейный поиск", () => {
  test("Значение есть в массиве", () => {
    expect(linearSearch([1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11], 1)).toBe(0);
  });
  test("Значение вне массива", () => {
    expect(linearSearch([1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11], 110)).toBe(null);
  });
});
