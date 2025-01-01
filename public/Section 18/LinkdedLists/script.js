// // creating LinkdedLists the cheap way as stated

// const node1 = {
//     value: 200
// }

// const node2 = {
//     value: 300
// }

// const node3 = {
//     value: 400
// }

// node1.next = node2;
// node2.next = node3;
// node3.next = null;

// console.log(node1 , node2 , node3);

//Using OOP

class Node {
  //state of the node is value and the next is null until a head value is created
  constructor(value) {
    this._value = value;
    this.next = null;
  }
}

class LinkdedLists {
  // no value yet is given and the head remains zero
  constructor() {
    this._head = null;
    this._length = 0;
  }

  // InsertAt [Inserting the first Node... (Head)]

  insertFirst(value) {
    const newNode = new Node(value);
    newNode.next = this._head;
    this._head = newNode;
    this._length++;
  }

  // InsertAt [Inserting the Last Node... (Tail)]
  insertLast(value) {
    const newNode = new Node(value);
    let current = this._head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this._length++;
  }

  //   Insert at Index
  insertAt(value, index) {
    if (index > this._length) {
      return;
    }

    if (index === 0) {
      this.insertFirst(value);
      return;
    }
    const newNode = new Node(value);
    let current, previous;
    current = this._head;
    let count = 0;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    newNode.next = current;
    previous.next = newNode;
    this._length++;
  }
  //   Get at Index

  getAt(index) {
    let current = this._head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current._value);
      }

      count++;
      current = current.next;
      return null;
    }
  }

  //   Remove at Index
  removeAt(index) {
    if (index > this._length) {
      return;
    }
    let current = this._head;
    let previous;
    let count = 0;

    if (index === 0) {
      this._head = current.next;
      return;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this._length--;
  }

  //   Print List Data
  printListData() {
    let current = this._head;
    let list = "";

    while (current) {
      list += current._value + " ";
      current = current.next;
    }

    console.log(list); // 300 200 100 500
  }

  //   Clear List Data
  clearListData() {
    this._head = null;
    this._length = 0;
  }
}

const list = new LinkdedLists();

list.insertFirst(100); // this points to the second node
list.insertFirst(200); // this points to the first  node
list.insertFirst(300);
list.insertLast(50);
list.insertLast(10);
list.insertAt(1, 2);
list.getAt(0);

console.log(list);

list.printListData();




