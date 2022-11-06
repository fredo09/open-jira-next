/**
 *   Generando el modelos de los Entries
 **/

import mongoose, { Schema, Model } from "mongoose";
import { Entry } from "../../interfaces";

//Interface para el schema y extendemos de las propiedades ya creadas del interface 'Entry'
interface IModelEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["pending", "in-progress", "finished"],
      message: "{VALUE} esto no esta dentro de los estatus permitidos",
    },
  },
});

const isCreatedModelSchema: Model<IModelEntry> =
  mongoose.models.Entries || mongoose.model("Entries", entrySchema);

export default isCreatedModelSchema;
