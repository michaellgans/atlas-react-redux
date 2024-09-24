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
        // handleClearCard
        deleteCard: (state, action: PayloadAction<string>) => {
          state.items.forEach((item) => {
              // Filter out the card by ID
              item.cardArray = item.cardArray.filter(cardId => cardId !== action.payload);
          });
      },
// handledeleteCard
// handleClearBoard

export const cardsSlice = createSlice({
  name: "taskList",
  initialState,
  reducers: {},
});

export default cardsSlice.reducer;