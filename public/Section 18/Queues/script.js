class Queue {
  constructor() {
    this._queue = [];
    this._count = 0;
    this._front = 0; // reps the item or piece of data that is in the front
  }

  enqueue(item) {
    this._queue[this._count] = item;
    this._count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return "This Queue is empty";
    }

    const item = this._queue[this._front];
    for (let i = this._front; i < this._count - 1; i++) {
        return this._queue[i] = this._queue[i + 1];
    }

    this._count--;
    this._queue.length = this._count;
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return "This Queue is empty";
    }

    return this._queue[this._front];
  }

  length(){
    return this._count - this._front;
  }

  isEmpty() {
    return this._count === 0;
  }
}


const q = new Queue()
q.enqueue(2);
q.enqueue(6);
q.enqueue(6);
q.enqueue(5);

console.log(q.dequeue()); // 2
console.log('Front Item: ',q.peek()); // 
console.log('Queue Length: ', q.length())



// dequeue() {
//     if (this.isEmpty()) { // Check if the queue is empty.
//       return "This Queue is empty";
//     }

//     const item = this._queue[this._front]; // Get the item at the front of the queue.
//     for (let i = this._front; i < this._count - 1; i++) { // Shift all items forward.
//         this._queue[i] = this._queue[i + 1];
//     }

//     this._count--; // Decrease the count since one person has left.
//     this._queue.length = this._count; // Adjust the array size.
//     return item; // Return the item that was removed.
// }
