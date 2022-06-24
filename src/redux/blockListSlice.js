import { createSlice } from '@reduxjs/toolkit';

const blockListSlice = createSlice({
	name: 'blockList',
	initialState: {
		contents: [{ title: 'Depression', text: 'Patient is experiencing depression' }]
	},
	reducers: {
		addBlock: (state, action) => [...state.array, action.payload]
	}
});

export const { addBlock } = blockListSlice.actions;

export default blockListSlice;
