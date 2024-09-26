// Tests for CardsSlide

// Imports
import { describe, it, expect } from "vitest";
import cardsSlice, { addCard, moveCard, deleteCard } from "../slices/cardsSlice";
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
    it('should move a card to a new list', () => {
        const stateWithCard = {
            items: [
                {id: '1', title: 'Test Title', description: 'Test Description', listID: '1'}
            ] as Card [],
        };

        const action = moveCard({ cardID: '1', newListID: '2' });
        const state = cardsSlice(stateWithCard, action);

        expect(state.items[0].listID).toBe('2');
    });

    // Test - deleteCard
    it('should delete a card', () => {
        const stateWithCard = {
            items: [
                {id: '1', title: 'Test Title', description: 'Test Description', listID: '1'}
            ] as Card [],
        };

        const action = deleteCard('1');
        const state = cardsSlice(stateWithCard, action);

        expect(state.items.length).toBe(0);
    });
    
    // Test - clearBoard
})