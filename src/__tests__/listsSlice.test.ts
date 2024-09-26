// Tests for ListsSlide

// Imports
import { describe, it, expect } from "vitest";
import listsSlice, { List, addList, deleteList, clearBoard, addCardToList } from "../slices/listsSlice";

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
    it('should add a card to the specified list', () => {
        const stateWithList = {
            items: [
                {title: 'Test Title', id: 'list-1', cardArray: []},
                {title: 'Test Title', id: 'list-2', cardArray: []}
            ] as List [],
        };

        const action = addCardToList({ listId: 'list-1', cardId: 'card-1'});
        const state = listsSlice(stateWithList, action);

        expect(state.items[0].cardArray).toContain('card-1');
        expect(state.items[0].cardArray.length).toBe(1);
        // Card added to the first list and not the second
        expect(state.items[1].cardArray.length).toBe(0);
    })

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