import { FC, useReducer } from "react";
import { EntriesContext } from "./entriesContext";
import { entriesReducer } from "./entriesReducer";

export interface EntriesState {
  entries: boolean;
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: false,
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider value={{ ...state }}>
      {children}
    </EntriesContext.Provider>
  );
};
