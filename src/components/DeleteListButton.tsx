// DeleteListButton Component

// Asset Imports
import { deleteList } from "../slices/listsSlice";
import { useAppDispatch } from "../store";

// Types
type DeleteListButtonProps = {
  listID: string;
};

// Returns a DeleteListButton Component
export function DeleteListButton({ listID }: DeleteListButtonProps) {
  // Define Hook
  const dispatch = useAppDispatch();

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  return (
    <button className="h-[30px]" onClick={handleDeleteList}>
      <svg
        className="hidden h-[30px] w-[30px] cursor-pointer group-hover/list:block"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
}
