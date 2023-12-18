const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.queue = []; 
  }

  getUnderlyingList() {
    if (this.queue.length === 0) {
      return null;
    }

    const head = new Node(this.queue[0]);
    let currentNode = head;

    for (let i = 1; i < this.queue.length; i++) {
      currentNode.next = new Node(this.queue[i]);
      currentNode = currentNode.next;
    }

    return head;
  }

  enqueue(value) {
    this.queue.push(value)
  }

  dequeue() {
    return this.queue.shift()
  }
}

module.exports = {
  Queue
};
