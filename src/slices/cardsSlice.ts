// Slice for the cards in a list
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Card {
  id: string;
  title: string;
  description: string;
  listID: string;
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
    addCard: (state, action: PayloadAction<{ title: string; description: string; listID: string }>) => {
      const newCard = {
        id: Date.now().toString(),
        title: action.payload.title,
        description: action.payload.description,
        listID: action.payload.listID,
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