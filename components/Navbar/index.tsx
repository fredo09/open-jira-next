import React, { FC, useContext } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { UIContext } from "../../context/UI/UIContext";

export const Navbar: FC = () => {
  const { openMenuSidebar } = useContext(UIContext);

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <IconButton size="large" edge="start" onClick={openMenuSidebar}>
          <MenuOutlinedIcon />
        </IconButton>

        <Typography>OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
