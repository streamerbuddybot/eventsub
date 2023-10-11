import { FollowEventData, ChannelPointsCustomRewardRedemptionEvent, SubscriptionEventData } from "../types/eventsub";

import { EventSubHandler } from "../classes/eventsub";

export async function eventsub(type: string, data: any) {
  switch (type) {
    case "channel.update":
      // Handle channel update subscription
      break;

    case "channel.follow":
      // Handle channel follow subscription
      break;

    case "channel.subscribe":
      EventSubHandler.handleChannelSubscription(data);
      break;

    case "channel.subscription.end":
      // Handle channel subscription end subscription
      break;

    case "channel.subscription.gift":
      // Handle channel subscription gift subscription
      break;

    case "channel.subscription.message":
      // Handle channel subscription message subscription
      break;

    case "channel.cheer":
      // Handle channel cheer subscription
      break;

    case "channel.raid":
      // Handle channel raid subscription
      break;

    case "channel.ban":
      // Handle channel ban subscription
      break;

    case "channel.unban":
      // Handle channel unban subscription
      break;

    case "channel.moderator.add":
      // Handle channel moderator add subscription
      break;

    case "channel.moderator.remove":
      // Handle channel moderator remove subscription
      break;

    case "channel.guest_star_session.begin":
      // Handle channel guest star session begin subscription
      break;

    case "channel.guest_star_session.end":
      // Handle channel guest star session end subscription
      break;

    case "channel.guest_star_guest.update":
      // Handle channel guest star guest update subscription
      break;

    case "channel.guest_star_slot.update":
      // Handle channel guest star slot update subscription
      break;

    case "channel.guest_star_settings.update":
      // Handle channel guest star settings update subscription
      break;

    case "channel.channel_points_custom_reward.add":
      // A viewer has redeemed a custom channel points reward on the specified channel.

      break;

    case "channel.channel_points_custom_reward.update":
      // Handle channel points custom reward update subscription
      break;

    case "channel.channel_points_custom_reward.remove":
      EventSubHandler.handleChannelPointsCustomRewardRemove(type, data);

      break;

    case "channel.channel_points_custom_reward_redemption.add":
      
      await EventSubHandler.handleChannelPointsCustomRewardAdd(type, data );
      break;

    case "channel.channel_points_custom_reward_redemption.update":
      // Handle channel points custom reward redemption update subscription
      break;

    case "channel.poll.begin":
      // Handle channel poll begin subscription
      break;

    case "channel.poll.progress":
      // Handle channel poll progress subscription
      break;

    case "channel.poll.end":
      // Handle channel poll end subscription
      break;

    case "channel.prediction.begin":
      // Handle channel prediction begin subscription
      break;

    case "channel.prediction.progress":
      // Handle channel prediction progress subscription
      break;

    case "channel.prediction.lock":
      // Handle channel prediction lock subscription
      break;

    case "channel.prediction.end":
      // Handle channel prediction end subscription
      break;

    case "channel.charity_campaign.donate":
      // Handle charity donation subscription
      break;

    case "channel.charity_campaign.start":
      // Handle charity campaign start subscription
      break;

    case "channel.charity_campaign.progress":
      // Handle charity campaign progress subscription
      break;

    case "channel.charity_campaign.stop":
      // Handle charity campaign stop subscription
      break;

    case "drop.entitlement.grant":
      // Handle drop entitlement grant subscription
      break;

    case "extension.bits_transaction.create":
      // Handle extension bits transaction create subscription
      break;

    case "channel.goal.begin":
      // Handle goal begin subscription
      break;

    case "channel.goal.progress":
      // Handle goal progress subscription

      // await eventSubHandler.handleGoalProgress(data);
      break;

    case "channel.goal.end":
      // Handle goal end subscription
      break;

    case "channel.hype_train.begin":
      // Handle Hype Train begin subscription
      break;

    case "channel.hype_train.progress":
      // Handle Hype Train progress subscription
      break;

    case "channel.hype_train.end":
      // Handle Hype Train end subscription
      break;

    case "channel.shield_mode.begin":
      // Handle Shield Mode begin subscription
      break;

    case "channel.shield_mode.end":
      // Handle Shield Mode end subscription
      break;

    case "channel.shoutout.create":
      // Handle Shoutout create subscription
      break;

    case "channel.shoutout.receive":
      // Handle Shoutout receive subscription
      break;

    case "stream.online":
      // Handle stream online subscription
      break;

    case "stream.offline":
      // Handle stream offline subscription
      break;

    case "user.authorization.grant":
      // Handle user authorization grant subscription
      break;

    case "user.authorization.revoke":
      // Handle user authorization revoke subscription
      break;

    case "user.update":
      // Handle user update subscription
      break;

    default:
      // Handle unknown subscription type
      break;
  }
}
