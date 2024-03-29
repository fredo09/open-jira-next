import type { NextPage } from "next";
import { Card, CardHeader, Grid } from "@mui/material";
import { Layout } from "../layout";
import { EntryList } from "../components/EntryList";
import { NewEntry } from "../components/NewEntry";

const Home: NextPage = () => {
  return (
    <Layout title="Open - Jira">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Pendientes" />

            {/* Agregar nuevas tareas */}
            <NewEntry />
            {/* Listar nuevas tareas */}
            <EntryList status="pending" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="En Progreso" />
            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px)" }}>
            <CardHeader title="Completadas" />
            <EntryList status="finished" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
