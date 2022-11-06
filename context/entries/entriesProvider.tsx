import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext } from "./entriesContext";
import { entriesReducer } from "./entriesReducer";

import { v4 as uuidv4 } from "uuid";
export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: "pending",
    };

    dispatch({ type: "[Entry] - EntryAdd", payload: newEntry });
  };

  const updateEntryByStatus = (entryUpdate: Entry) => {
    dispatch({ type: "[Entry] - Update Entry", payload: entryUpdate });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntryByStatus,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
