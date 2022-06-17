import { createContext } from "react";

interface ContextProps {
  sideMenuOpen: boolean;
  //Methods
  openMenuSidebar: () => void;
  closeMenuSidebar: () => void;
}

export const UIContext = createContext({} as ContextProps);
