// Board Component

// Asset Imports
import { useAppSelector, useAppDispatch } from "../store";
import { List } from "./List";
import { RootState } from "../store";

// Drag and Drop
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { moveCard } from "../slices/cardsSlice";

// Returns a Board Component
export function Board() {
  // Define Hook
  const lists = useAppSelector((state: RootState) => state.listsSlice.items);
  const dispatch = useAppDispatch();

  // Drag and Drop
  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over) {
      const cardID = active.id;
      const newListID = over.id;

      dispatch(moveCard({ cardID, newListID }));
    }
  }

  return (
    // START BOARD
    <DndContext onDragEnd={handleDragEnd}>
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
          {lists.map((list) => (
            <List key={list.id} listID={list.id} listTitle={list.title} />
          ))}
        </div>
      </div>
    </DndContext>
  );
}
