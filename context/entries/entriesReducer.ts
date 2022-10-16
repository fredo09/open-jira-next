import { EntriesState } from "./";
import { Entry } from "../../interfaces";

type EntriesActionType = { type: "[Entry] - EntryAdd"; payload: Entry };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case "[Entry] - EntryAdd":
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };

    default:
      return state;
  }
};
