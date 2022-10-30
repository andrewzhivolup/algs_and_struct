/**
 * Пузырьковая сортировка - O(n*n)
 * @param {array} array - Массив
 * @returns {array} Отсортированный массив
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

module.exports = bubbleSort;

