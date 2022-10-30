/**
 * Нахождение факториала заданного числа
 * @param {number} number - Число
 * @returns {number} Значение факториала
 */
const factorial = (number) => {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
};

/**
 * Нахождение значение числа Фибоначчи по порядковому номеру
 * @param {number} number - Порядковый номер числа
 * @returns {number} Число Фибоначчи
 */
const fibonachi = (number) => {
  if (number === 1) {
    return 0;
  }
  if (number === 2 || number === 3) {
    return 1;
  }
  return fibonachi(number - 1) + fibonachi(number - 2);
};

module.exports = {
  factorial,
  fibonachi,
};