import * as EventSubTypes from "../types/eventsub";
class eventSubHandler {
  //handle channel subscription
  async handleChannelSubscription(event: EventSubTypes.SubscriptionEventData) {
    console.log("handleChannelSubscription");
  }


  //handle channel redemption add
  handleChannelPointsCustomRewardAdd(event: EventSubTypes.ChannelPointsCustomRewardRedemptionEvent) {}
}




export const EventSubHandler = new eventSubHandler();