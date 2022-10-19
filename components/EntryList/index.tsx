import React, { FC, useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "../EntryCard";
import { EntryStatus } from "../../interfaces";
import { EntriesContext } from "../../context/entries/entriesContext";
import { UIContext } from "../../context/UI/UIContext";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntryByStatus } = useContext(EntriesContext);
  const { isDragging, setIsDraggingEnd } = useContext(UIContext);

  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");

    //Encontramos el task por el id
    const findEntry = entries.find((e) => e._id === id)!;
    findEntry.status = status;
    updateEntryByStatus(findEntry);

    //Terminamos el dragging
    setIsDraggingEnd();
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    // TODO: aqui haremos drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        {/* TODO: cambiara cuando este haciendo drag o no */}
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: "all .3s" }}>
          {entriesByStatus.map((entry) => (
            <EntryCard key={entry._id} entry={entry} status={status} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
