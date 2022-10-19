import { EntriesState } from "./";
import { Entry } from "../../interfaces";

type EntriesActionType =
  | { type: "[Entry] - EntryAdd"; payload: Entry }
  | { type: "[Entry] - Update Entry"; payload: Entry };

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
    case "[Entry] - Update Entry":
      return {
        ...state,
        entries: state.entries.map((entry: Entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };

    default:
      return state;
  }
};
