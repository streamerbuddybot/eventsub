import * as grpc from "@grpc/grpc-js";
import { EventSubServiceClient, SendEventRequest, SendEventResponse, UnimplementedEventSubServiceService } from "../proto/eventsub";
import * as config from "../config.json";
import { eventsub } from "../functions/handleEventsub";

const server = new grpc.Server();
const port = config.grpcServer.port;
const host = config.grpcServer.host;

async function grpcServer() {
  const serviceImpl = {
    SendEvent: async (call: grpc.ServerUnaryCall<SendEventRequest, SendEventResponse>, callback: grpc.sendUnaryData<SendEventResponse>) => {
      let { type, event } = call.request.toObject();
      if (!type || !event) return callback(null, new SendEventResponse({ status: 401, message: "Missing type or event" }));
      event = JSON.parse(event);

      await eventsub(type, event);

      callback(null, new SendEventResponse({ status: 200, message: "OK" }));
    },
  };
  server.addService(EventSubServiceClient.service, serviceImpl);
  server.bindAsync(`${host}:${port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    server.start();
    console.log("server running on port", `${host}:${port}`);
  });
}

export default grpcServer;
