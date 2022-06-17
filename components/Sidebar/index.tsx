import React, { useContext } from "react";
import { Box } from "@mui/system";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { UIContext } from "../../context/UI/UIContext";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

const menuItems: string[] = ["Inbox", "Starred", "Send Email"];

export const Sidebar = () => {
  //Buscamos un contexto que necesitamos
  const { sideMenuOpen, closeMenuSidebar } = useContext(UIContext);

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeMenuSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Open Jira</Typography>
        </Box>

        <List>
          {menuItems.map((menu, idx) => (
            <ListItem key={menu}>
              <ListItemIcon>
                {idx % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={menu} />
            </ListItem>
          ))}
        </List>

        <Divider />
      </Box>
    </Drawer>
  );
};
