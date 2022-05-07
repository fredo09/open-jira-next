import React, { FC } from "react";
import { Box } from "@mui/system";
import Head from "next/head";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar/index";

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title> {title} </title>
      </Head>

      <Navbar />
      <Sidebar />

      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
