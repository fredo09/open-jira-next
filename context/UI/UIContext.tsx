import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddNewEntry: boolean;
  isDragging: boolean;

  //Methods
  openMenuSidebar: () => void;
  closeMenuSidebar: () => void;
  setIsAddNewEntry: (isAddNewEntry: boolean) => void;
  setIsDraggingStart: () => void;
  setIsDraggingEnd: () => void;
}

export const UIContext = createContext({} as ContextProps);
