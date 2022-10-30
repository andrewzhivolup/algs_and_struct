const {
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
  iteration,
  recursive
} = require("./algAndStruct");

let seachedElement = 1;
const linearSearchArray = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
console.log(
  `Линейный поиск. Индекс: ${seachedElement} в \[${linearSearchArray}\] = `,
  linearSearch(linearSearchArray, seachedElement)
);

seachedElement = 8;
const binarySearchArray = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
];
console.log(
  `Бинарный поиск. Индекс: ${seachedElement} в \[${binarySearchArray}\] = `,
  binarySearch(binarySearchArray, seachedElement)
);
console.log(
  `Бинарный поиск(рекурсия). Индекс: ${seachedElement} в \[${binarySearchArray}\] = `,
  recursiveBinarySearch(binarySearchArray, seachedElement)
);

const needSortArray = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
];
console.log(`Неотсортрованный массив: \[${needSortArray}\]`);
console.log("Сортировака выбором:", selectionSort(needSortArray));
console.log("Пузырьковая сортировка:", bubbleSort(needSortArray));
console.log("Быстрая сортировка:", quickSort(needSortArray));

const num = 1;
console.log(`!${num} =`, factorial(num));
console.log(`Число фибоначчи под номером ${num} =`, fibonachi(num));

const breadthSearchGraph = {};
breadthSearchGraph.a = ["b", "c"];
breadthSearchGraph.b = ["f"];
breadthSearchGraph.c = ["d", "e"];
breadthSearchGraph.d = ["f"];
breadthSearchGraph.e = ["f"];
breadthSearchGraph.f = ["g"];

let start = "a";
let end = "g";

console.log(
  `Поиск в ширину в графе. Наличие пути из \'${start}\' в \'${end}\' = `,
  breadthSearch(breadthSearchGraph, start, end)
);

const shortPathGraph = {};
shortPathGraph.a = { b: 2, c: 1 };
shortPathGraph.b = { f: 7 };
shortPathGraph.c = { d: 5, e: 2 };
shortPathGraph.d = { f: 2 };
shortPathGraph.e = { f: 1 };
shortPathGraph.f = { g: 1 };
shortPathGraph.g = {};

start = "a";
end = "g";

console.log(
  `Алгоритм Дейкстры. Кротчайший путь из \'${start}\' в \'${end}\' = `,
  shortPath(shortPathGraph, start, end)
);

const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

console.log(`Итерационный обход дерева. Сумма дерева = `, iteration(tree))
console.log(`Рекурсивый обход дерева. Сумма дерева = `, recursive(tree))
// console.log(recursive(tree))