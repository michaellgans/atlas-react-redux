// Card Component

// Asset Imports
import { DeleteCardButton } from "./DeleteCardButton";

// Drag and Drop
import { useDraggable } from "@dnd-kit/core";

// Types
type CardProps = {
  title: string;
  description: string;
  cardID: string;
};

// Returns a Card Component
export function Card({ title, description, cardID }: CardProps) {
  // Drag and Drop
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: cardID,
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="card group/card m-3 flex min-h-24 w-full flex-col items-start rounded bg-off-white-light px-4 py-2 text-blue"
    >
      <h5 className="my-2 flex w-full items-end justify-between text-xl font-black">
        <span>{title}</span>
        {/* DELETE CARD BUTTON */}
        <DeleteCardButton cardID={cardID} />
      </h5>
      <p className="mt-0 text-left">{description}</p>
    </div>
  );
}
