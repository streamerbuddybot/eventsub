import { Actions } from "../grpc/Action";
import { ActionRequest, ActionResponse } from "../proto/Actions";

export default async function (payload: ActionRequest): Promise<ActionResponse> {
  const response = await new Promise<ActionResponse>((resolve, reject) => {
    Actions["SendAction"](new ActionRequest(payload), (err, res) => {
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