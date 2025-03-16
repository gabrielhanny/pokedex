import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Custom hook untuk dispatch dengan tipe AppDispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook untuk selector dengan tipe RootState
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
