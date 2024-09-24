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

type AddCardPayload = {
    listId: string;
    cardId: string;
}

const initialState: ListState = {
  // Lists have unique ID, title, and array of card IDs
  items: [],
};

// Reducer Functions
export const listSlice = createSlice({
    name: "listsSlice",
    initialState,
    reducers: {
        // handleAddList
        addList: (state, action: PayloadAction<string>) => {
            state.items.push({
                id: Date.now().toString(),
                title: action.payload,
                cardArray: [],
            });
        },
        // handleDeleteList
        deleteList: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        // handleAddCardToList
        addCardToList: (state, action: PayloadAction<AddCardPayload>) => {
            const { listId, cardId } = action.payload;
            const list = state.items.find(item => item.id === listId);
            
            if (list) {
                list.cardArray.push(cardId);
            }
        },
        // handleClearBoard
        clearBoard: (state) => {
            state.items = [];
        },
    }
});

// Export Actions
export const { addList, deleteList, addCardToList, clearBoard } = listSlice.actions;

// Export Reducer
export default listSlice.reducer;
