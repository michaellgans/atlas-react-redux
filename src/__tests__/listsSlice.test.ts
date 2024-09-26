// Tests for ListsSlide

// Imports
import { describe, it, expect } from "vitest";
import listsSlice, { List, addList, clearBoard } from "../slices/listsSlice";

describe('listsSlice reducer tests', () => {
    // Initially, no lists are present
    const initialState = { items: [] as List[] };

    // Test - addList
    it('should add a new list to the store', () => {
        const newListTitle = 'Test Title';
        const action = addList(newListTitle);
        const state = listsSlice(initialState, action);

        expect(state.items.length).toBe(1);
        expect(state.items[0].title).toBe(newListTitle);
        expect(state.items[0].id).toBeDefined();
        expect(state.items[0].cardArray).toEqual([]);
    });

    // Test - moveCard
    // it('should move a card to a new list', () => {
    //     const stateWithCard = {
    //         items: [
    //             {id: '1', title: 'Test Title', description: 'Test Description', listID: '1'}
    //         ] as Card [],
    //     };

    //     const action = moveCard({ cardID: '1', newListID: '2' });
    //     const state = cardsSlice(stateWithCard, action);

    //     expect(state.items[0].listID).toBe('2');
    // });

    // Test - deleteCard
    // it('should delete a card', () => {
    //     const stateWithCard = {
    //         items: [
    //             {id: '1', title: 'Test Title', description: 'Test Description', listID: '1'}
    //         ] as Card [],
    //     };

    //     const action = deleteCard('1');
    //     const state = cardsSlice(stateWithCard, action);

    //     expect(state.items.length).toBe(0);
    // });

    // Test - clearBoard
    it('should clear the whole board', () => {
        const stateWithList = {
            items: [
                {title: 'Test Title'},
                {title: 'Test Title 2'}
            ] as List [],
        };

        const action = clearBoard();
        const state = listsSlice(stateWithList, action);

        expect(state.items.length).toBe(0);
    });
})