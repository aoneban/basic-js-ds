const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/*
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor(){
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    const newNode = new Node(data)
    if (!this.rootNode) {
      this.rootNode = newNode
      return
    }

    let currentNode = this.rootNode

    while(currentNode) {
      if(newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return
        }
        currentNode = currentNode.right
      }
    }

  }

  has(data) {
    return searchItem(this.rootNode, data);

  function searchItem(node, data) {
    if (!node) {
      return false;
    }

    if (node.data === data) {
      return true;
    }

    return data < node.data ? searchItem(node.left, data) : searchItem(node.right, data);
  }
  }

  find(data) {
    return findItem(this.rootNode, data);

    function findItem(node, data) {
      if (!node) {
        return null;
      }
  
      if (node.data === data) {
        return node;
      }
  
      return data < node.data ? findItem(node.left, data) : findItem(node.right, data);
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};