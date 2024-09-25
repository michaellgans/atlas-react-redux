// List Component

// Asset Imports
import { useSelector } from "react-redux";
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";
import { RootState } from "../store";
import { Card as CardType } from "../slices/cardsSlice";

// Types
type ListProps = {
  listID: string;
  listTitle: string;
};

// Returns a List Component
export function List({ listID, listTitle }: ListProps) {
  // Define Hook
  const cards = useSelector((state: RootState) =>
    state.cards.items.filter((card: CardType) => card.listID === listID),
  );

  return (
    // START LIST
    <div className="group/list h-full min-w-96 p-4">
      <DeleteListButton listID={listID} />
      <h3>{listTitle}</h3>
      {cards.map((card) => (
        <Card
          key={card.id}
          title={card.title}
          description={card.description}
          cardID={card.id}
        />
      ))}
      <NewCardForm listID={listID} />
    </div>
    // END LIST
  );
}
