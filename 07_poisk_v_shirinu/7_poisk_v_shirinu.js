/**
 * Поиск в ширину в графе
 * @param {object} graph - Объект с направлениями
 * @param {string} start - Начальная точка
 * @param {string} end - Конечная точка 
 * @returns {boolean} Есть ли путь из начальной точки в конечную
 */
const breadthSearch = (graph, start, end) => {
  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
};

module.exports = breadthSearch;