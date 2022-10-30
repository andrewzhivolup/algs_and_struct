/**
 * Кеширование данных функций
 * @param {function} fn - Кэшируемая функция
 * @returns
 */
const cashFunction = (fn) => {
  const cash = {};
  return (n) => {
    if (cash[n]) {
      console.log("Взято из кеша", cash[n]);
      return cash[n];
    }
    let result = fn(n);
    cash[n] = result;
    console.log("Подсчитала функция", cash[n]);
    return result;
  };
};

/**
 * Нахождение факториала заданного числа
 * @param {number} number - Число
 * @returns {number} Значение факториала
 */
const factorial = (n) => {
  let result = 1;
  while (n !== 1) {
    result *= n;
    n -= 1;
  }
  return result;
};

const cashFactorial = cashFunction(factorial);

cashFactorial(5);
cashFactorial(4);
cashFactorial(3);
cashFactorial(4);
cashFactorial(5);
cashFactorial(1);
