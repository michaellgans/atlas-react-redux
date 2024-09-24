// Board Component

// Asset Imports
import { List } from "./List";

// Returns a Board Component
export function Board() {
  // Define Hook
  return (
    // START BOARD
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        <List listTitle="List 1" />
        <List listTitle="List 2" />
        <List listTitle="List 3" />
      </div>
    </div>
  );
}
