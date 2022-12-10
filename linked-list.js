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
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length += 1;
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
		while (currentNode.next != null) {
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	/** shift(): return & remove first item. */

	shift() {
		let firstNode = this.head;
		this.head = firstNode.next;
		return firstNode;
	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		// if the index is greater or equal to the length of the linked list
		// and less than 0 it is an invalid index
		if (idx > this.length || idx < 0) {
			throw new Error('Not a valid index!');
		}
		let currentNode = this.head;
		for (let i = 1; i <= this.length; i++) {
			if (i === idx) {
				return currentNode.val;
			}
			currentNode = currentNode.next;
		}
	}

	// setAt(idx, val)
	// Set value of node at index position idx to val.
	// Throws error if index is invalid.

	/** setAt(idx, val): set val at idx to val */
	// node1----node2----node3-----node4----node4----null
	setAt(idx, val) {
		if (idx > this.length || idx < 0) {
			throw new Error('Not a valid index!');
		}
		let currentNode = this.head;
		for (let i = 1; i <= this.length; i++) {
			if (i === idx) {
				currentNode.val = val;
				return;
			}
			currentNode = currentNode.next;
		}
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		// check if index is out of bounds
		if (idx > this.length || idx < 0) {
			// if out of bound throw in error
			throw new Error('Not a valid index!');
		}
		// icheck if index is equal to zero, if it is it will insert
		// new node in the beginning of the list (use unshift method above)
		if (idx === 0) return this.unshift(val);
		// check if index is equal to the length of the linkedlist
		// if that is the case, push (use push method above) the newNode into the end of the list
		if (idx === this.length) return this.push(val);

		// create a new node
		let newNode = new Node(val);
		// set variables loop index, previous, and current nodes
		let prevNode = null;
		let currentNode = this.head;
		let loopIdx = 0;

		// loop while the current node exists
		while (currentNode) {
			// if the argument index is not equal to the current loop index
			if (idx !== loopIdx) {
				// update prev node to current node
				prevNode = currentNode;
				// update current node to current node.next
				currentNode = currentNode.next;
				// update loop index by incrementing it by one
				loopIdx++;
			} else {
				// make prev node point to new node
				prevNode.next = newNode;
				// make new node point to current node
				newNode.next = currentNode;
				// increase length of linked list
				this.length += 1;
				// return
				return this;
			}
		}
		return false;
	}
	//   if(idx > this.length || idx < 0) {
	//       throw new Error("Not a valid index!")
	//     }
	//   // create new Node
	//       let newNode = new Node(val);
	//       let currentNode = this.head;

	//       for(let i=1; i <= this.length; i++){
	//         if(idx === i){
	//           let initialNextNode = currentNode.next;
	//           currentNode.next = newNode;
	//           newNode.next = initialNextNode;
	//         return;
	//     }
	//     currentNode = currentNode.val
	//   }
	//   this.length+=1;
	// }

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		// check if index is out of bounds
		if (idx < 0 || idx >= this.length) {
			throw new Error('This index is invalid!');
		}
		// check if index is equal to 0.
		if (idx === 0) return this.shift();
		// check if index is equal to length minus one
		if (idx === this.length - 1) return this.pop();

		// set variables previous and current nodes.
		let prevNode = null;
		let currentNode = this.head;

		// set up for loop
		for (let i = 0; i > this.lenght; i++) {
			// if i is not equal to argument index
			if (i !== idx) {
				//  update previous node to current Node
				prevNode.next = currentNode;
				// update current node to next Node
				currentNode = currentNode.next;
			} else {
				// make previous node point to the current node's next node
				prevNode.next = currentNode.next;
				// decrement length
				this.length--;
				// return this
				return this;
			}
			return false;
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		// create a varaiable named total and set it to 0
		let total = 0;
		//
		let currentNode = this.head;

		while (currentNode) {
			total += currentNode.val;
			currentNode = currentNode.next;
		}
		return total / this.length;
	}
}

module.exports = LinkedList;

// setAt(idx, val) {
//   if(idx > this.length || idx < 0) {
//     throw new Error("Not a valid index!")
//   }
//   let newNode = new Node(val);
//   let currentNode = this.head;
//   currentNode = currentNode.val
//   for(let i=0; i <= this.length; i++){
//     if(i === idx){
//       return currentNode.val;
//     }
//     currentNode.val = val;
//   }
//   this.length+=1;
// }
