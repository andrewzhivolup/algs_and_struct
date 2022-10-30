/**
 * Класс Связного списка
 * - добавление элемента
 * - получение длины
 * - вывод списка на экран
 */
class LinkedList {
  constructor() {
    this.size = 0;
    this.root = null;
  }
  add(value) {
    if (this.size === 0) {
      this.root = new Node(value);
      this.size += 1;
      return true;
    }
    let node = this.root;
    while (node.next) {
      node = node.next;
    }
    let newNode = new Node(value);
    node.next = newNode;
    this.size += 1;
  }

  getSize() {
    console.log(this.size);
  }

  print() {
    let result = [];
    let node = this.root;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

/**
 * Класс элемента связного списка
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const list = new LinkedList();
list.add(5);
list.add(22);
list.add(5);
list.getSize();
list.print();
