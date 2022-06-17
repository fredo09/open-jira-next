import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

export interface UIState {
  sideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
};

export const UIProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  //Cambiamos el estado usando un dispatch en el useReducer
  const openMenuSidebar = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeMenuSidebar = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //Methods
        openMenuSidebar,
        closeMenuSidebar,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
