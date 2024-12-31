class Stacks {
  constructor() {
    this._items = [];
    this._count = 0;
  }

  push(item) {
    this._items[this._count] = item;
    this._count++;
    return this._count;
  }

  pop() {
    if (this.isEmpty()) {
      return "Unstack Underflow";
    }
    const item = this._items[this._count - 1];
    this._count--;

    for (let i = this._count; i < this._items.length; i++) {
      this._items[i] = this._items[i + 1];
    }

    this._items.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    return this._items[this._count - 1];
  }

  isEmpty() {
    return this._count === 0;
  }
  length() {
    return this._count;
  }

  clear(){
    this._items = [];
    this._count = 0;
    return this._items;
  }
}

const stack = new Stacks();
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
// stack.clear()

stack.pop();
console.log("Top Item : ", stack.peek());
console.log("Stack Length : ", stack.length());


