import mongoose from "mongoose";
import { COMMONS_SERVE } from "./../../commons";

/**
 *   0 = disconnected
 *   1 = connected
 *   2 = connecting
 *   3 = disconnecting
 **/
const mongooseConnection = {
  isConnected: COMMONS_SERVE.STATUS_MONGOO_DISCONNECT,
};

export const connectMongo = async () => {
  if (mongooseConnection.isConnected) {
    console.log("Conexion establecida");
    return;
  }

  //revisamos si hay alguna conexion
  if (mongoose.connections.length > COMMONS_SERVE.STATUS_MONGOO_DISCONNECT) {
    mongooseConnection.isConnected = mongoose.connections[0].readyState;

    if (
      mongooseConnection.isConnected === COMMONS_SERVE.STATUS_MONGOO_CONNECTED
    ) {
      console.log("Usamos conexion anterior");
      return;
    }

    await mongoose.disconnect();
  }

  await mongoose.connect("...");
  mongooseConnection.isConnected = COMMONS_SERVE.STATUS_MONGOO_CONNECTED;
};

export const disconnect = async () => {
  if (mongooseConnection.isConnected !== COMMONS_SERVE.STATUS_MONGOO_CONNECTED)
    return;

  await mongoose.disconnect();

  console.log("Se ha desconectado de la BD");
};
