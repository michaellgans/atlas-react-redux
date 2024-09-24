// Footer Component

// Imports
import { addList, clearBoard } from "../slices/listsSlice";
import { useAppDispatch } from "../store";
import { useState, FormEvent } from "react";

// Returns a Footer Component
export function Footer() {
  // Define Hook
  const [newList, setNewList] = useState("");
  const dispatch = useAppDispatch();

  const handleAddList = (event: FormEvent) => {
    // Prevent "submit" from reloading page
    event.preventDefault();
    if (newList.trim() !== "") {
      dispatch(addList(newList));
      setNewList("");
    }
  };

  const handleClearBoard = () => {
    console.log("Clear board was pressed");
    dispatch(clearBoard());
  };

  return (
    <footer className="sticky bottom-0 left-0 flex w-screen items-center justify-center space-x-8 border-t-2 border-blue bg-off-white-light p-8">
      <form onSubmit={handleAddList}>
        <input
          type="text"
          value={newList}
          placeholder="List title"
          onChange={(event) => setNewList(event.target.value)}
          name="title"
          className="border-0 bg-transparent text-3xl font-semibold text-blue placeholder:text-blue placeholder:opacity-50 focus:outline-none"
        />
        <button
          type="submit"
          className="mr-3 rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Save
        </button>
        <button
          type="button"
          onClick={handleClearBoard}
          className="rounded bg-teal px-6 py-4 text-xl font-semibold text-off-white-light"
        >
          Clear Board
        </button>
      </form>
    </footer>
  );
}
