// Tests for CardsSlide

// Imports
import { describe, it, expect } from "vitest";
import cardsSlice, { addCard } from "../slices/cardsSlice";
import { Card } from "../slices/cardsSlice";

describe('cardsSlice reducer tests', () => {
    // Initially, no cards are present
    const initialState = { items: [] as Card[] };

    // Test - addCard
    it('should add a new card to the store', () => {
        const newCard = {title: 'Test Title', description: 'Test Description', listID: '1'};
        const action = addCard(newCard);
        const state = cardsSlice(initialState, action);

        expect(state.items.length).toBe(1);
        expect(state.items[0].title).toBe(newCard.title);
        expect(state.items[0].description).toBe(newCard.description);
        expect(state.items[0].listID).toBe(newCard.listID);
    });

    // Test - moveCard
    // Test - deleteCard
    // Test - clearBoard
})