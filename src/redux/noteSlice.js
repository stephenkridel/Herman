import { createSlice } from '@reduxjs/toolkit';

const noteSlice = createSlice({
	name: 'note',
	initialState: {
		text: ''
	},
	reducers: {
		addText: (state, action) => {
			state.text += ' ' + action.payload;
		},
		userUpdateNote: (state, action) => {
			state.text = action.payload;
		}
	}
});

export const { addText, userUpdateNote } = noteSlice.actions;

export default noteSlice;
