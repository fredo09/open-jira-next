import React, { FC } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar: FC = () => {
  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start">
          <MenuOutlinedIcon />
        </IconButton>

        <Typography>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
