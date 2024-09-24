// Slice for the lists on the board
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface List {
    id: string;
    title: string;
    cardArray: string[];
}

interface ListState {
    items: List[];
}

const initialState: ListState = {
  // Lists have unique ID, title, and array of card IDs
  items: [],
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

// Export Actions
export const { addList } = listSlice.actions;

// Export Reducer
export default listSlice.reducer;
