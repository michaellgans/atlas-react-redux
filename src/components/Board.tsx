// Board Component

// Asset Imports
import { useAppSelector } from "../store";
import { List } from "./List";
import { RootState } from "../store";

// Returns a Board Component
export function Board() {
  // Define Hook
  const lists = useAppSelector((state: RootState) => state.listsSlice.items);

  return (
    // START BOARD
    <div className="m-auto h-screen w-screen overflow-x-scroll text-center">
      <div className="flex h-full space-x-4">
        {lists.map((list) => (
          <List key={list.id} listID={list.id} listTitle={list.title} />
        ))}
      </div>
    </div>
  );
}
