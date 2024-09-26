// Tests for ListsSlide

// Imports
import { describe, it, expect } from "vitest";
import listsSlice, { List, addList, deleteList, clearBoard } from "../slices/listsSlice";

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

    // Test - addCardToList

    // Test - deleteList
    it('should delete a list', () => {
        const stateWithList = {
            items: [
                {title: 'Test Title', id: '1'},
                {title: 'Test Title', id: '2'}
            ] as List [],
        };

        const action = deleteList('2');
        const state = listsSlice(stateWithList, action);

        expect(state.items.length).toBe(1);
    });

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