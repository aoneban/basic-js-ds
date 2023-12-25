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
      this.rootNode = newNode;
      return;
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
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    return searchItem(this.rootNode, data);

    function searchItem(node, data) {
      if (!node) {
        return false;
      } else if (node.data === data) {
        return true;
      } else if (data < node.data) {
        return searchItem(node.left, data);
      } else {
        return searchItem(node.right, data);
      }
    }
  }

  find(data) {
    return findItem(this.rootNode, data);

    function findItem(node, data) {
      if (!node) {
        return null;
      } else if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findItem(node.left, data);
      } else {
        return findItem(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeItem(this.rootNode, data);
  
    function removeItem(node, data) {
      if (!node) {
        return null;
      }
  
      if (data < node.data) {
        node.left = removeItem(node.left, data);
      } else if (data > node.data) {
        node.right = removeItem(node.right, data);
      } else {
        if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        }
  
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeItem(node.right, tempNode.data);
      }
      return node;
    }
  }
  

  min() {
    return searchMin(this.rootNode);

    function searchMin(node) {
      if (!node) {
        return false;
      } else if (node.left) {
        return searchMin(node.left);
      } else {
        return node.data;
      } 
    }
  }

  max() {
    return searchMax(this.rootNode);

    function searchMax(node) {
      if (!node) {
        return false;
      } else if (node.right) {
        return searchMax(node.right);
      } else {
        return node.data;
      } 
    }
  }
}

module.exports = {
  BinarySearchTree
};