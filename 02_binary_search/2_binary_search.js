const quickSort = require("../05_quick_sort/5_quick_sort");
/**
 * Бинарный поиск - цикл
 * (Массив будет отсортирован)
 * @param {array} array - Массив
 * @param {number} item - Элемент, порядковый номер которого надо найти
 * @returns {number || null} Порядковый номер искомого элемента || null
 */
const binarySearch = (array, item) => {
  quickSort(array);
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = null;
  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    item < array[middle] ? (end = middle - 1) : (start = middle + 1);
  }
  return position;
};

/**
 * Бинарный поиск - рекурсия - O(log2n)
 * (Массив будет отсортирован)
 * @param {array} array - Массив
 * @param {number} item - Элемент, порядковый номер которого надо найти
 * @param {number} start - С какого элемента начинать поиск (необязательный, по-умолчанию = 0)
 * @param {number} end - На каком элементе закончить поиск (необязательный, по-умолчанию = array.length)
 * @returns {number || null} Порядковый номер искомого элемента || null
 */
const recursiveBinarySearch = (array, item, start = 0, end = array.length) => {
  quickSort(array);
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    return middle;
  }
  if (item < array[middle]) {
    return recursiveBinarySearch(array, item, start, middle - 1);
  } 
  if (item > array[middle]) {
    return recursiveBinarySearch(array, item, middle + 1, end);
  }
  return null;
};

module.exports = {
  binarySearch,
  recursiveBinarySearch,
};
