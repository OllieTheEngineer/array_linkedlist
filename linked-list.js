/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  // The _get(idx) was not added to the homework this deff would have been helpful

    /** _get(idx): retrieve node at idx. */

    // _get(idx) {
    //   let cur = this.head;
    //   let count = 0;
  
    //   while (cur !== null && count != idx) {
    //     count += 1;
    //     cur = cur.next;
    //   }
  
    //   return cur;
    // }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
        this.head = newNode;
        this.tail = this.head;
        }else {
      this.tail.next = newNode;
      this.tail = newNode;
       }
       this.length+=1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
      // this creates a new node, with the val input so it uses the previous Node 
    // so we have somehting to use
    let newNode = new Node(val);

    // Here we are going, if this.head is null 
    // then we want it to equal the val of the newNode
    if (this.head === null) {
      this.head = newNode;
    // Here we are saying ok, if this.head doesnt equal null, meaning if it has a value, 
    // then we want to assign the newNode.next to that value the one this.head has
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // It is pretty much say that if the length is 0, 
    // then it means that tial is empty,
    // so then you give it the calue of this.tail 
    // and it adds one to length to let it know tail is not empy.

    if (this.length === 0) this.tail = this.head;
    this.length += 1;
  }
    // newNode.next = this.head;
    // this.head = newNode;
    // this.length++;
  

  /** pop(): return & remove last item. */

  pop() {
    let currentNode = this.head;
    while(currentNode.next != null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /** shift(): return & remove first item. */

  shift() {
    let firstNode = this.head;
    this.head = firstNode.next
    return firstNode;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    // if the index is greater or equal to the length of the linked list 
    // and less than 0 it is an invalid index
    if(idx > this.length || idx < 0) {
      throw new Error("Not a valid index!")
    }
    let currentNode = this.head;
    for(let i=1; i <= this.length; i++){
      if(i === idx){
        return currentNode.val;
      }
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */
// node1----node2----node3-----node4----node4----null
  setAt(idx, val) {
    if(idx > this.length || idx < 0) {
      throw new Error("Not a valid index!")
    }
    let currentNode = this.head;
    currentNode = currentNode.val
    for(let i=0; i <= this.length; i++){
      if(i === idx){
        return currentNode.val;
      }
      currentNode.val = val;
      this.length+=1;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
