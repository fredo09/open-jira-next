import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  isAddNewEntry: boolean;
  //Methods
  openMenuSidebar: () => void;
  closeMenuSidebar: () => void;
  setIsAddNewEntry: (isAddNewEntry: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
