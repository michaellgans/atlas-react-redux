// Slice for the cards in a list
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { listSlice } from "./listsSlice";

interface Card {
  id: string;
  title: string;
  description: string;
}

interface CardState {
  items: Card[];
}

const initialState: CardState = {
  // Cards have unique ID, title, and description
  items: [],
};

// Reducer Functions
export const cardsSlice = createSlice({
  name: "cardsSlice",
  initialState,
  reducers: {
    // handleCreateCard
    addCard: (state, action: PayloadAction<string>) => {
      const newCard = {
        id: Date.now().toString(),
        title: action.payload,
        description: action.payload,
      };
      state.items.push(newCard);
      console.log("A new card was created", newCard.id);
    },
    // handledeleteCard
    deleteCard: (state, action: PayloadAction<string>) => {
          state.items = state.items.filter(item => item.id !== action.payload);
    },
    // handleClearBoard
    clearBoard: (state) => {
      state.items = [];
    },
  }
});

// Export Actions
export const { addCard, deleteCard, clearBoard } = cardsSlice.actions;

// Export Reducer
export default cardsSlice.reducer;