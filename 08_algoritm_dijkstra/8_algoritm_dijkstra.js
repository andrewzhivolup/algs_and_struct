/**
 * Алгоритм Дейкстры (поиск кратчайшего пути в графе)
 * @param {object} graph - Объект с расстояниями
 * @param {number} start - Начальная точка
 * @param {number} end - Конечная точка
 * @returns {number} Расстояние от начальной до конечной точки
 */
const shortPath = (graph, start, end) => {
  const costs = {};
  const processed = [];
  let neigbors = {};
  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || Number.MAX_VALUE;
    }
  });
  let node = findNodeLowesrCost(costs, processed);
  while (node) {
    const cost = costs[node];
    neigbors = graph[node];
    Object.keys(neigbors).forEach((neigbor) => {
      let newCost = cost + neigbors[neigbor];
      if (newCost < costs[neigbor]) {
        costs[neigbor] = newCost;
      }
    });
    processed.push(node);
    node = findNodeLowesrCost(costs, processed);
  }
  return costs[end];
};

/**
 * Нахождение вершины с минимальной стоимостью
 * @param {object} costs - Стоимость всех путей
 * @param {array} processed - Массив уже оьбработанных узлов 
 * @returns {string} Имя вершины с минимальной стоимостью 
 */
const findNodeLowesrCost = (costs, processed) => {
  let lowestCost = Number.MAX_VALUE;
  let lowestNode;
  Object.keys(costs).forEach((node) => {
    let cost = costs[node];
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost;
      lowestNode = node;
    }
  });
  return lowestNode;
};

module.exports = shortPath;