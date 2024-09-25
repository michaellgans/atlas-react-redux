// NewCardForm Component

// Asset Imports
import { addCard } from "../slices/cardsSlice";
import { useAppDispatch } from "../store";
import { useState, FormEvent, KeyboardEvent } from "react";

type NewCardFormProps = {
  listID: string;
};

// Returns a NewCardForm Component
export function NewCardForm({ listID }: NewCardFormProps) {
  // Define Hook
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useAppDispatch();

  const handleAddCard = (event: FormEvent) => {
    event.preventDefault();
    if (title.trim() !== "") {
      dispatch(addCard({ title, description, listID }));
      setTitle("");
      setDescription("");
    }
  };

  const handleTitleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Enter" && title.trim() !== "") {
      event.preventDefault();
      dispatch(addCard({ title, description, listID }));
      setTitle("");
    }
  };

  return (
    // START NEW CARD FORM
    <div className="group/new-card m-3 flex h-44 w-full justify-center">
      <form
        onSubmit={handleAddCard}
        className="hidden min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 text-blue group-hover/new-card:flex"
      >
        <input
          className="w-11/12 resize-none overflow-auto rounded-t-3xl border-0 bg-off-white-light px-0 py-6 text-xl font-black text-blue outline-none"
          autoFocus
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onKeyDown={handleTitleKeyPress}
          onChange={(event) => setTitle(event.target.value)}
        />
        <textarea
          className="w-11/12 resize-none overflow-auto border-0 bg-off-white-light text-blue outline-none"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></textarea>
        <div className="buttons w-full">
          <button type="submit" className="w-full p-4">
            Save
          </button>
        </div>
      </form>
    </div>
    // END NEW CARD FORM
  );
}
