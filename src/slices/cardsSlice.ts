// Slice for the lists on the board
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Lists have unique ID, title, and description
  items: [
    { id: "1", name: "Item 1", completed: false },
    { id: "2", name: "Item 2", completed: true },
  ],
};

// Reducer Functions

// handleCreateCard
// handledeleteCard
// handleClearBoard

export const cardsSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;