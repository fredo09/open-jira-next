import React, { FC, DragEvent, useContext } from "react";
import { Entry } from "../../interfaces";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { UIContext } from "../../context/UI/UIContext";

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  //Usando el contexto UI para hacer drag en las cards
  const { setIsDraggingStart, setIsDraggingEnd } = useContext(UIContext);

  /**
   * Nos ayuda a saber que elemento se le hace drag
   */
  const onDragStart = (event: DragEvent) => {
    console.log(event);

    event.dataTransfer?.setData("text", entry._id);
    setIsDraggingStart();
  };

  /**
   * Cuando se termine el drag
   */
  const onDragEnd = () => setIsDraggingEnd();

  return (
    <div>
      <Card
        sx={{ marginBottom: 1 }}
        draggable
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
      >
        <CardActionArea>
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }} component="div">
              {entry.description}
            </Typography>
          </CardContent>

          <CardActions
            sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
          >
            <Typography variant="body2" component="div">
              {entry.createAt}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};
