import * as grpc from "@grpc/grpc-js";
import { ChatServiceClient } from "../proto/IRC";
import * as config from "../config.json";

const host = config.irc.host;
const port = config.irc.port;
const connectionString = `${host}:${port}`;

const Chat = new ChatServiceClient(connectionString, grpc.credentials.createInsecure());

export { Chat };
