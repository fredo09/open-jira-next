import { FC, useReducer } from "react";
import { UIContext } from "./UIContext";
import { UIReducer } from "./UIReducer";

//Agregamos nuevos atributos en el interface para el UISTATE
export interface UIState {
  sideMenuOpen: boolean;
  isAddNewEntry: boolean;
}

//Inicializamos el estado
const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddNewEntry: false,
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

  const setIsAddNewEntry = (isAddNewEntry: boolean) => {
    dispatch({ type: "UI - Add Entry", payload: isAddNewEntry });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        //Methods
        openMenuSidebar,
        closeMenuSidebar,
        setIsAddNewEntry,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
