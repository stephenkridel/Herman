import { createSlice } from '@reduxjs/toolkit';

const blockSlice = createSlice({
  name: 'block',
  initialState: {
    title: '',
    text: '',
    blocks: [],
    variables: []
  },
  reducers: {
    setTitle: (state, action) => (state.title = action.payload),
    setText: (state, action) => (state.text = action.payload),
    addVariables: (state, action) => [...state.variables, action.payload]
  }
});

export const { setText, setTitle, addVariables } = blockSlice.actions;

export default blockSlice;
