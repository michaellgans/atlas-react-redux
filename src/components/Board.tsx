// Board Component

// Asset Imports
import { useAppSelector, useAppDispatch } from "../store";
import { List } from "./List";
import { RootState } from "../store";

// Drag and Drop
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { moveCard } from "../slices/cardsSlice";
import { useState } from "react";
import { Card } from "./Card";

// Returns a Board Component
export function Board() {
  // Define Hook
  const lists = useAppSelector((state: RootState) => state.listsSlice.items);
  const cards = useAppSelector((state: RootState) => state.cards.items);
  const dispatch = useAppDispatch();

  const [activeCard, setActiveCard] = useState<null | {
    title: string;
    description: string;
    id: string;
  }>(null);

  // Drag and Drop
  function handleDragStart(event: DragStartEvent) {
    const { active } = event;

    const activeCardData = cards.find((card) => card.id === active.id);

    if (activeCardData) {
      setActiveCard(activeCardData);
    }
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over) {
      const cardID = active.id;
      const newListID = over.id;

      dispatch(moveCard({ cardID, newListID }));
    }

    setActiveCard(null);
  }

  return (
    // START BOARD
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
        <div className="flex h-full space-x-4">
          {lists.map((list) => (
            <List key={list.id} listID={list.id} listTitle={list.title} />
          ))}
        </div>
      </div>

      <DragOverlay>
        {activeCard ? (
          <Card
            title={activeCard.title}
            description={activeCard.description}
            cardID={activeCard.id}
          />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
