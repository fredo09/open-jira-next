import type { NextApiRequest, NextApiResponse } from "next";
import { EntrySchema, IModelEntry } from "../../../models";
import { db } from "../../../database";

//Forma de setear la DATA segun sea el caso del entripoint
type Data = { message: string } | IModelEntry[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  //Generamos un switch para ver el tipo de metodo y generar la accion
  switch (req.method) {
    case "GET":
      return getEntries(res);

    default:
      return res.status(400).json({ message: "EndPoint no existe" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connectMongo();
  const entries = await EntrySchema.find().sort({ createAt: "ascending" });
  await db.disconnect();

  res.status(201).json(entries);
};
