import { createSlice } from '@reduxjs/toolkit';
// Data
//import { default as savedData } from '../data/tree.json';
// Helpers
import { traverse, remove, add } from '../helpers/TreeOperations';
import { default as defaultTree } from '../data/tree.json';

// This is a main workhorse for the app. The currentBlock property contains
// the block whose children are being displayed. The tree property contains
// the current state of the main tree structure. All the changes are maintained
// here until the user quits out of the app or presses a future save button.
const sectionSlice = createSlice({
	name: 'section',
	initialState: {
		name: '',
		currentBlock: defaultTree.root,
		tree: defaultTree
	},
	reducers: {
		addBlock: (state, action) => {
			let newTree = add(state.currentBlock.id, action.payload, state.tree);
			return {
				...state,
				currentBlock: {
					...state.currentBlock,
					children: [...state.currentBlock.children, action.payload]
				},
				tree: newTree
			};
		},
		renderReduxChildren: (state, action) => {
			return {
				...state,
				currentBlock: action.payload
			};
		},
		renderReduxParent: (state, action) => {
			return {
				...state,
				currentBlock: traverse(state.currentBlock.parentId, state.tree)
			};
		},
		filterBlocks: (state, action) => {
			let [newTree, node] = remove(action.payload, state.currentBlock.id, state.tree);
			return {
				...state,
				currentBlock: { ...state.currentBlock, children: node.children },
				tree: newTree
			};
		},
		// currentBlock needs updated too or the UI will be wrong
		updateTree: (state, action) => {
			return {
				...state,
				tree: action.payload,
				currentBlock: action.payload.root
			};
		}
	}
});

export const { addBlock, renderReduxChildren, renderReduxParent, filterBlocks, updateTree } =
	sectionSlice.actions;

export default sectionSlice;
