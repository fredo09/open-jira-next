import React from "react";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

export const EntryCard = () => {
  return (
    <div>
      <Card sx={{ marginBottom: 1 }}>
        <CardActionArea>
          <CardContent>
            <Typography sx={{ whiteSpace: "pre-line" }}>
              Esto es la descripcion
            </Typography>
          </CardContent>

          <CardActions
            sx={{ display: "flex", justifyContent: "end", paddingRight: 2 }}
          >
            <Typography variant="body2">Fecha de creacion</Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};
