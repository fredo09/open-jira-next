import { Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../layout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <Typography variant="h1" color="primary">
        Hola Mundo
      </Typography>
    </Layout>
  );
};

export default Home;
