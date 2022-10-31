const { binarySearch, recursiveBinarySearch } = require("./2_binary_search");

describe("Бинарный поиск", () => {
  test("Бинарный поиск - рекурсия, значение есть в массиве", () => {
    expect(
      recursiveBinarySearch(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        1
      )
    ).toBe(1);
  });
  test("Бинарный поиск - рекурсия, значение вне массива", () => {
    expect(recursiveBinarySearch([1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11], 110)).toBe(
      null
    );
  });
  test("Бинарный поиск - цикл, значение есть в массиве", () => {
    expect(
        binarySearch(
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        1
      )
    ).toBe(1);
  });
  test("Бинарный поиск - цикл, значение вне массива", () => {
    expect(binarySearch([1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11], 110)).toBe(
      null
    );
  });
});
