/**
 * Линейный поиск - O(n)
 * @param {array} array - Массив
 * @param {number} item - Элемент, порядковый номер которого надо найти
 * @returns {number || null} Порядковый номер искомого элемента || null
 */
const linearSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
  return null;
};

module.exports = linearSearch;
