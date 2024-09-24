// Store for state data

import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from "react-redux";
import listsSliceReducer from './slices/listsSlice';
// import cardsSliceReducer from './slices/cardsSlice';

export const store = configureStore({
  reducer: {
    listsSlice: listsSliceReducer,
  },
});

// These types are helpful for the typescript autocomplete
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//Add types to dispatch and selector hooks
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();