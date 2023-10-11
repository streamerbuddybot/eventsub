import { ActionData, ActionRequest } from "../proto/Actions";
import * as EventSubTypes from "../types/eventsub";
import { ChannelPointDB } from "./database/channelpoints";
import handleAction from "../services/handleAction";
import sendChatMessage from "../services/sendChatMessage";
import { SendMessageRequest } from "../proto/IRC";
import { TwitchDBHandler } from "./database/twitch";

class eventSubHandler {
  //handle channel subscription
  async handleChannelSubscription(event: EventSubTypes.SubscriptionEventData) {
    console.log("handleChannelSubscription");
  }

  //handle channel redemption add
  async handleChannelPointsCustomRewardAdd(type: string, event: EventSubTypes.ChannelPointsCustomRewardRedemptionEvent) {
    const channelPoint = await ChannelPointDB.searchChannelPointByID(event.reward.id, event.broadcaster_user_id);

    if (!channelPoint || channelPoint!.total === 0 || channelPoint!.total === undefined) return;

    const Actiondata = new ActionData({
      channelID: +event.broadcaster_user_id,
      channelName: event.broadcaster_user_login,
      userinput: event.user_input,
      message: channelPoint.documents[0].message,
      userID: +event.user_id,
      username: event.user_login,
    });

    const payload = new ActionRequest({
      Action: channelPoint.documents[0].function,
      Actiondata: Actiondata,
    });

    const response = await handleAction(payload);

    const MessagePayload = new SendMessageRequest({
      channel: `${event.broadcaster_user_login}`,
      message: `${response.message}`,
    });

    sendChatMessage(MessagePayload);
  }

  //handle channel point removed
  async handleChannelPointsCustomRewardRemove(type: string, event: EventSubTypes.ChannelPointsCustomRewardRemoveEvent) {
    const res = await ChannelPointDB.removeChannelPoint(event.id, event.broadcaster_user_id);
  }

  //handle channel online
  async handleChannelOnline(event: EventSubTypes.StreamOnlineEvent) {
    await TwitchDBHandler.setStreamerOnline(event.broadcaster_user_id);
  }


  //handle channel offline
  async handleChannelOffline(event: EventSubTypes.StreamOnlineEvent) {
    console.log("handleChannelOffline");

    await TwitchDBHandler.setStreamerOffline(event.broadcaster_user_id);
  }
}

export const EventSubHandler = new eventSubHandler();
