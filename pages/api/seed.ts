import type { NextApiRequest, NextApiResponse } from "next";
import { COMMONS_SERVE } from "./../../commons";
import { db, seedData } from "../../database";
import { EntrySchema } from "../../models";

type Data = {
  status: string;
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === COMMONS_SERVE.ENVIRONMENT_PROD) {
    return res.status(404).json({
      status: "ERROR",
      message: "No tienes acceso a produccion",
    });
  }

  //Conectamos a la DB
  await db.connectMongo();

  //Insertando data del SeedBataBase
  await EntrySchema.deleteMany();
  await EntrySchema.insertMany(seedData.entries);

  //Desconectamos de la BD
  await db.disconnect();

  res
    .status(200)
    .json({ status: "OK", message: "Proceso realizado correctamente" });
}
