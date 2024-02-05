const QueueFactory = () => {
  const items = [];

  /* This method will simple take an element as an
    argument and add to the end of the list
  */
  const enqueue = (element) => {
    items.push(element);
  };
  /*
    Dequeue will remove the first element of our items and return it.
    We can simple use Array.prototype.shift for that task:
    Friendly reminder that shift mutates items array.
  */
  const dequeue = () => items.shift();
  /* This method will only return for visibility purposes the first element of the list:
   */
  const front = () => items[0];
  /* As the name says, this method will check if our queue is empty or not: */
  const isEmpty = () => items.length === 0;
  /* This will simply return the length of the list */
  const size = () => items.length;
  /* Check the entire list */
  const queue = () => {
    [...items];
  };
  /* Print queue */
  const print = () => {
    console.log({ ...items });
  };

  return {
    enqueue,
    dequeue,
    front,
    isEmpty,
    size,
    queue,
    print,
  };
};

const myQueue = QueueFactory();

myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(6);
myQueue.enqueue("que paso");

// console.log(myQueue.front()); // 3
// myQueue.queue(); // 3,2,6
// myQueue.print(); // 3,2,6

// console.log(myQueue.dequeue()); // 3
// console.log(myQueue.dequeue()); // 2
// console.log(myQueue.dequeue()); // 2
myQueue.print(); // 2,6

myQueue.size(); //
console.log(myQueue.isEmpty()); //
