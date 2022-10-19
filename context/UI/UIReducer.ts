import { UIState } from "./";

type UIActionType =
  | { type: "UI - Open Sidebar" }
  | { type: "UI - Close Sidebar" }
  | { type: "UI - Add Entry"; payload: boolean }
  | { type: "UI - isDraggingStart" }
  | { type: "UI - isDraggingEnd" };

export const UIReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case "UI - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "UI - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    case "UI - Add Entry":
      return {
        ...state,
        isAddNewEntry: action.payload,
      };
    case "UI - isDraggingStart":
      return {
        ...state,
        isDragging: true,
      };
    case "UI - isDraggingEnd":
      return {
        ...state,
        isDragging: false,
      };
    default:
      return state;
  }
};
