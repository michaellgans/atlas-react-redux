// List Component

// Asset Imports
import { Card } from "./Card";
import { DeleteListButton } from "./DeleteListButton";
import { NewCardForm } from "./NewCardForm";

// Script Imports

// Types
type ListProps = {
  listTitle: string;
};

// Returns a List Component
export function List({ listTitle }: ListProps) {
  // Define Hook
  return (
    // START LIST
    <div className="group/list h-full min-w-96 p-4">
      {/* onclick="alert('Delete list')" */}
      <DeleteListButton />
      <h3>{listTitle}</h3>
      <Card title="Title" description="test..." />
      <Card title="Title" description="test..." />
      <Card title="Title" description="test..." />
      <NewCardForm />
    </div>
    // END LIST
  );
}
