// Slice for the lists on the board
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Lists have unique ID, title, and array of card IDs
  items: [
    { id: "1", name: "Item 1", completed: false },
    { id: "2", name: "Item 2", completed: true },
  ],
};

// Reducer Functions

// handleAddList
// handleDeleteList
// handleAddCard
// handleClearBoard

export const listsSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {},
});

export default listsSlice.reducer;