import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";

const menuItems: string[] = ["Inbox", "Starred", "Send Email"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open onClose={() => console.log("Cerrando")}>
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
