import React from "react";
import { List, Paper } from "@mui/material";
import { EntryCard } from "../EntryCard";

export const EntryList = () => {
  return (
    // TODO: aqui haremos drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          padding: "1px 5px",
        }}
      >
        {/* TODO: cambiara cuando este haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
