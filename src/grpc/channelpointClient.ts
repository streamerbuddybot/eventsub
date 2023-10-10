import * as grpc from "@grpc/grpc-js";
import { channelPointServiceClient } from "../proto/channelpoints";
import * as config from "../config.json";

const host = config.channelPoint.host;
const port = config.channelPoint.port;
const connectionString = `${host}:${port}`;

const channelPointAPI = new channelPointServiceClient(connectionString, grpc.credentials.createInsecure());

export { channelPointAPI };
