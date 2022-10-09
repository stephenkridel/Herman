// This file has utility functions used for traversing the
// state tree and removing, adding, or changing blocks. All the
// changes are passed to the sectionSlice portion of the redux store
// and no changes are saved in data until the user quits the application

// breadth-first search through the tree. Used primarily
// to find a parent to switch the UI to the parent block's children
const traverse = (searchId, tree) => {
	let root = tree.root;
	let collection = [root];

	while (collection.length > 0) {
		let node = collection.shift();
		console.log(node);
		if (node.id === searchId) {
			return node;
		} else {
			collection.push(...node.children);
		}
	}
	console.log('Did not find parent');
	return root;
};

// helper function used in remove and add functions
const _search = (node, target, callback) => {
	if (node.id === target) {
		let editNode = callback(node, target);
		return editNode;
	}

	// for OF needed, not for IN (it's an array)
	for (const child of node.children) {
		const found = _search(child, target, callback);

		if (found) {
			return found;
		}
	}
};

// breadth-first search through the tree until the display block
// is found. Then look at the children and remove the child using
// the action.payload retrieved from the state passing from UI to redux
const remove = (searchId, parentId, tree) => {
	const callback = function (node, target) {
		if (node.id === target) {
			let idx;
			for (let i = 0; i < node.children.length; i++) {
				if (node.children[i].id === searchId) idx = i;
			}
			console.log(`Node ${node.children[idx].id} removed`);
			node.children.splice(idx, 1);
		}
		return node;
	};

	let newTree = JSON.parse(JSON.stringify(tree));
	let node = _search(newTree.root, parentId, callback);
	return [newTree, node];
};

// same as remove, except a new node is pushed on
// which is grabbed from action.payload
const add = (searchId, newNode, tree) => {
	const callback = function (node) {
		node.children.push(newNode);
		console.log(`Node: ${node.id} added`);
		return node;
	};

	let newTree = JSON.parse(JSON.stringify(tree));
	_search(newTree.root, searchId, callback);
	return newTree;
};

export { traverse, remove, add };
