// This class has utility functions used for traversing the
// state tree and removing, adding, or changing blocks. All the
// changes are passed to the sectionSlice portion of the redux store
// and no changes are saved in data until the user quits the application

class TreeOperations {
	// breadth-first search through the tree. Used primarily
	// to find a parent to switch the UI to the parent block's children
	static traverse = (searchId, tree) => {
		let root = tree.root;
		let collection = [root];

		while (collection.length > 0) {
			let node = collection.shift();
			if (node.id === searchId) {
				return node;
			} else {
				collection.push(...node.children);
			}
		}
		console.log('Did not find parent');
		return root;
	};

	// breadth-first search through the tree until the display block
	// is found. Then look at the children and remove the child using
	// the action.payload retrieved from the state passing from UI to redux
	static remove = (searchId, parentId, tree) => {
		let newTree = JSON.parse(JSON.stringify(tree));

		const search = (node, target) => {
			if (node.id === target) {
				let idx;
				for (let i = 0; i < node.children.length; i++) {
					if (node.children[i].id === searchId) idx = i;
				}
				console.log(`Node ${node.children[idx].id} removed`);
				node.children.splice(idx, 1);
				return node;
			}

			// for OF needed, not for IN (it's an array)
			for (const child of node.children) {
				const found = search(child, target);

				if (found) {
					return found;
				}
			}
		};

		let node = search(newTree.root, parentId);
		return [newTree, node];
	};

	// same as remove, except a new node is pushed on
	// which is grabbed from action.payload
	static add = (searchId, newNode, tree) => {
		let newTree = JSON.parse(JSON.stringify(tree));

		const search = (node, target) => {
			if (node.id === target) {
				node.children.push(newNode);
				console.log(`Node: ${node.id} added`);
				return node;
			}

			// for OF needed, not for IN (it's an array)
			for (const child of node.children) {
				const found = search(child, target);

				if (found) {
					return found;
				}
			}
		};

		search(newTree.root, searchId);
		return newTree;
	};
}

export default TreeOperations;
