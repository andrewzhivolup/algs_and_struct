const linearSearch = require("./01_linear_search/1_linear_search");
const {
  binarySearch,
  recursiveBinarySearch,
} = require("./02_binary_search/2_binary_search");
const selectionSort = require("./03_selection_sort/3_selection_sort");
const bubbleSort = require("./04_bubble_sort/4_bubble_sort");
const quickSort = require("./05_quick_sort/5_quick_sort");
const { factorial, fibonachi } = require("./06_recursion/6_recursion");
const breadthSearch = require("./07_poisk_v_shirinu/7_poisk_v_shirinu");
const shortPath = require("./08_algoritm_dijkstra/8_algoritm_dijkstra");
const { recursive, iteration } = require("./09_tree_algs/9_tree_algs");

module.exports = {
  linearSearch,
  binarySearch,
  recursiveBinarySearch,
  selectionSort,
  bubbleSort,
  quickSort,
  factorial,
  fibonachi,
  breadthSearch,
  shortPath,
  recursive, 
  iteration
};
