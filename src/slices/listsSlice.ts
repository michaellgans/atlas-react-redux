// Slice for the lists on the board
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  // Lists have unique ID, title, and array of card IDs
  items: [
    { id: "1", title: "List Title", cardArray: [] }
  ],
};

// Reducer Functions

// handleAddList
export const listSlice = createSlice({
    name: "listsSlice",
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<string>) => {
            state.items.push({
                id: Date.now().toString(),
                title: action.payload,
                cardArray: [],
            });
        },
    },
});

// handleDeleteList
// handleAddCard
// handleClearBoard

export const { addList } = listSlice.actions;
