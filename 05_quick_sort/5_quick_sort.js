/**
 * Быстрая сортировка O(log2n*n)
 * @param {array} array - Массив
 * @returns {array} Отсортированный массив
 */
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (i === pivotIndex) continue;
    element < pivot ? less.push(element) : greater.push(element)
  }
  return [...quickSort(less), pivot, ...quickSort(greater)]
};

module.exports = quickSort;
