import { Chat } from "../grpc/IRC";
import { SendMessageRequest, SendMessageResponse,  } from "../proto/IRC";

export default async function (payload: SendMessageRequest): Promise<SendMessageResponse> {
  const response = await new Promise<SendMessageResponse>((resolve, reject) => {
    Chat["SendMessage"](new SendMessageRequest(payload), (err, res) => {
      if (err) {
        reject(err);
      } else {
        if (!res) {
          reject("no response data");
          return;
        }
        resolve(res);
      }
    });
  });
  return response;
}