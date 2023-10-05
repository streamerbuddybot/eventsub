export enum TwitchEventSubTypes {
  ChannelUpdate = "channel.update",
  ChannelFollow = "channel.follow",
  ChannelSubscribe = "channel.subscribe",
  ChannelSubscriptionEnd = "channel.subscription.end",
  ChannelSubscriptionGift = "channel.subscription.gift",
  ChannelSubscriptionMessage = "channel.subscription.message",
  ChannelCheer = "channel.cheer",
  ChannelRaid = "channel.raid",
  ChannelBan = "channel.ban",
  ChannelUnban = "channel.unban",
  ChannelModeratorAdd = "channel.moderator.add",
  ChannelModeratorRemove = "channel.moderator.remove",
  ChannelGuestStarSessionBegin = "channel.guest_star_session.begin",
  ChannelGuestStarSessionEnd = "channel.guest_star_session.end",
  ChannelGuestStarGuestUpdate = "channel.guest_star_guest.update",
  ChannelGuestStarSlotUpdate = "channel.guest_star_slot.update",
  ChannelGuestStarSettingsUpdate = "channel.guest_star_settings.update",
  ChannelChannelPointsCustomRewardAdd = "channel.channel_points_custom_reward.add",
  ChannelChannelPointsCustomRewardUpdate = "channel.channel_points_custom_reward.update",
  ChannelChannelPointsCustomRewardRemove = "channel.channel_points_custom_reward.remove",
  ChannelChannelPointsCustomRewardRedemptionAdd = "channel.channel_points_custom_reward_redemption.add",
  ChannelChannelPointsCustomRewardRedemptionUpdate = "channel.channel_points_custom_reward_redemption.update",
  ChannelPollBegin = "channel.poll.begin",
  ChannelPollProgress = "channel.poll.progress",
  ChannelPollEnd = "channel.poll.end",
  ChannelPredictionBegin = "channel.prediction.begin",
  ChannelPredictionProgress = "channel.prediction.progress",
  ChannelPredictionLock = "channel.prediction.lock",
  ChannelPredictionEnd = "channel.prediction.end",
  ChannelCharityCampaignDonate = "channel.charity_campaign.donate",
  ChannelCharityCampaignStart = "channel.charity_campaign.start",
  ChannelCharityCampaignProgress = "channel.charity_campaign.progress",
  ChannelCharityCampaignStop = "channel.charity_campaign.stop",
  DropEntitlementGrant = "drop.entitlement.grant",
  ExtensionBitsTransactionCreate = "extension.bits_transaction.create",
  ChannelGoalBegin = "channel.goal.begin",
  ChannelGoalProgress = "channel.goal.progress",
  ChannelGoalEnd = "channel.goal.end",
  ChannelHypeTrainBegin = "channel.hype_train.begin",
  ChannelHypeTrainProgress = "channel.hype_train.progress",
  ChannelHypeTrainEnd = "channel.hype_train.end",
  ChannelShieldModeBegin = "channel.shield_mode.begin",
  ChannelShieldModeEnd = "channel.shield_mode.end",
  ChannelShoutoutCreate = "channel.shoutout.create",
  ChannelShoutoutReceive = "channel.shoutout.receive",
  StreamOnline = "stream.online",
  StreamOffline = "stream.offline",
  UserAuthorizationGrant = "user.authorization.grant",
  UserAuthorizationRevoke = "user.authorization.revoke",
  UserUpdate = "user.update",
  Unknown = "unknown", // For unknown actions
}


export interface ChannelUpdateEventData {
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  language: string;
  category_id: string;
  category_name: string;
  content_classification_labels: string[];
}

export interface FollowEventData {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  followed_at: string;
}

export interface SubscriptionEventData {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  tier: "prime" | "1000" | "2000" | "3000";
  is_gift: boolean;
}

export interface SubscriptionEndEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  tier: string;
  is_gift: boolean;
}

export interface SubscriptionGiftEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  total: number;
  tier: string;
  cumulative_total: number | null; // null if anonymous or not shared by the user
  is_anonymous: boolean;
}

export interface SubscriptionMessageEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  tier: string;
  message: {
    text: string;
    emotes: {
      begin: number;
      end: number;
      id: string;
    }[];
  };
  cumulative_months: number;
  streak_months: number | null; // null if not shared
  duration_months: number;
}

export interface BitCheerEvent {
  is_anonymous: boolean;
  user_id: string | null; // Null if is_anonymous=true
  user_login: string | null; // Null if is_anonymous=true
  user_name: string | null; // Null if is_anonymous=true
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  message: string;
  bits: number;
}

export interface RaidEvent {
  from_broadcaster_user_id: string;
  from_broadcaster_user_login: string;
  from_broadcaster_user_name: string;
  to_broadcaster_user_id: string;
  to_broadcaster_user_login: string;
  to_broadcaster_user_name: string;
  viewers: number;
}

export interface BanEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  moderator_user_id: string;
  moderator_user_login: string;
  moderator_user_name: string;
  reason: string;
  banned_at: string; // You can use Date type if you parse the string to a Date object
  ends_at: string; // You can use Date type if you parse the string to a Date object
  is_permanent: boolean;
}

export interface UnbanEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  moderator_user_id: string;
  moderator_user_login: string;
  moderator_user_name: string;
}

export interface ModeratorAddEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
}

export interface ModeratorRemoveEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
}

export interface ChannelGuestStarSessionBeginEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  session_id: string;
  started_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelGuestStarSessionEndEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  session_id: string;
  started_at: string; // You can use Date type if you parse the string to a Date object
  ended_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelGuestStarGuestUpdateEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  session_id: string;
  moderator_user_id: string;
  moderator_user_name: string;
  moderator_user_login: string;
  guest_user_id: string;
  guest_user_name: string;
  guest_user_login: string;
  slot_id: string;
  state: string;
}

export interface ChannelGuestStarSlotUpdateEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  session_id: string;
  moderator_user_id: string;
  moderator_user_name: string;
  moderator_user_login: string;
  guest_user_id: string;
  guest_user_name: string;
  guest_user_login: string;
  slot_id: string;
  host_video_enabled: boolean;
  host_audio_enabled: boolean;
  host_volume: number;
}

export interface ChannelGuestStarSettingsUpdateEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  is_moderator_send_live_enabled: boolean;
  slot_count: number;
  is_browser_source_audio_enabled: boolean;
  group_layout: string;
}

export interface ChannelPointsCustomRewardAddEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  is_enabled: boolean;
  is_paused: boolean;
  is_in_stock: boolean;
  title: string;
  cost: number;
  prompt: string;
  is_user_input_required: boolean;
  should_redemptions_skip_request_queue: boolean;
  cooldown_expires_at: string | null; // You can use Date type if you parse the string to a Date object
  redemptions_redeemed_current_stream: number | null;
  max_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  max_per_user_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  global_cooldown: {
    is_enabled: boolean;
    seconds: number;
  };
  background_color: string;
  image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
  default_image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
}

export interface ChannelPointsCustomRewardUpdateEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  is_enabled: boolean;
  is_paused: boolean;
  is_in_stock: boolean;
  title: string;
  cost: number;
  prompt: string;
  is_user_input_required: boolean;
  should_redemptions_skip_request_queue: boolean;
  cooldown_expires_at: string; // You can use Date type if you parse the string to a Date object
  redemptions_redeemed_current_stream: number;
  max_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  max_per_user_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  global_cooldown: {
    is_enabled: boolean;
    seconds: number;
  };
  background_color: string;
  image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
  default_image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
}

export interface ChannelPointsCustomRewardUpdateEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  is_enabled: boolean;
  is_paused: boolean;
  is_in_stock: boolean;
  title: string;
  cost: number;
  prompt: string;
  is_user_input_required: boolean;
  should_redemptions_skip_request_queue: boolean;
  cooldown_expires_at: string; // You can use Date type if you parse the string to a Date object
  redemptions_redeemed_current_stream: number;
  max_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  max_per_user_per_stream: {
    is_enabled: boolean;
    value: number;
  };
  global_cooldown: {
    is_enabled: boolean;
    seconds: number;
  };
  background_color: string;
  image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
  default_image: {
    url_1x: string;
    url_2x: string;
    url_4x: string;
  };
}

export interface ChannelPointsCustomRewardRedemptionEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  user_id: string;
  user_login: string;
  user_name: string;
  user_input: string;
  status: string;
  reward: {
    id: string;
    title: string;
    cost: number;
    prompt: string;
  };
  redeemed_at: string;
}

export interface ChannelPointsCustomRewardRedemptionUpdateEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  user_id: string | null; // Set to null if the redemption is anonymous
  user_login: string | null; // Set to null if the redemption is anonymous
  user_name: string | null; // Set to null if the redemption is anonymous
  user_input: string;
  status: "fulfilled" | "cancelled";
  reward: {
    id: string;
    title: string;
    cost: number;
    prompt: string;
  };
  redeemed_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPollBeginEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  choices: {
    id: string;
    title: string;
  }[];
  bits_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  channel_points_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  started_at: string; // You can use Date type if you parse the string to a Date object
  ends_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPollProgressEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  choices: {
    id: string;
    title: string;
    bits_votes: number;
    channel_points_votes: number;
    votes: number;
  }[];
  bits_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  channel_points_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  started_at: string; // You can use Date type if you parse the string to a Date object
  ends_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPollEndEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  choices: {
    id: string;
    title: string;
    bits_votes: number;
    channel_points_votes: number;
    votes: number;
  }[];
  bits_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  channel_points_voting: {
    is_enabled: boolean;
    amount_per_vote: number;
  };
  status: "completed";
  started_at: string; // You can use Date type if you parse the string to a Date object
  ended_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPredictionBeginEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  outcomes: {
    id: string;
    title: string;
    color: string;
  }[];
  started_at: string; // You can use Date type if you parse the string to a Date object
  locks_at: string; // You can use Date type if you parse the string to a Date object
}



export interface ChannelPredictionPredictionEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  outcomes: {
    id: string;
    title: string;
    color: string;
    users?: number;
    channel_points?: number;
    top_predictors?: {
      user_name: string;
      user_login: string;
      user_id: string;
      channel_points_won: number | null;
      channel_points_used: number;
    }[];
  }[];
  started_at: string; // You can use Date type if you parse the string to a Date object
  locks_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPredictionLockEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  outcomes: {
    id: string;
    title: string;
    color: string;
    users?: number;
    channel_points?: number;
    top_predictors?: {
      user_name: string;
      user_login: string;
      user_id: string;
      channel_points_won: number | null;
      channel_points_used: number;
    }[];
  }[];
  started_at: string; // You can use Date type if you parse the string to a Date object
  locked_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelPredictionEndEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  title: string;
  winning_outcome_id: string;
  outcomes: {
    id: string;
    title: string;
    color: "blue" | "pink";
    users: number;
    channel_points: number;
    top_predictors: {
      user_name: string;
      user_login: string;
      user_id: string;
      channel_points_won: number | null;
      channel_points_used: number;
    }[];
  }[];
  status: "resolved" | "canceled";
  started_at: string; // You can use Date type if you parse the string to a Date object
  ended_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelHypeTrainBeginEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  total: number;
  progress: number;
  goal: number;
  top_contributions: {
    user_id: string;
    user_login: string;
    user_name: string;
    type: "bits" | "subscription"; // Add more types if needed
    total: number;
  }[];
  last_contribution: {
    user_id: string;
    user_login: string;
    user_name: string;
    type: "bits" | "subscription"; // Add more types if needed
    total: number;
  };
  level: number;
  started_at: string; // You can use Date type if you parse the string to a Date object
  expires_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelHypeTrainProgressEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  level: number;
  total: number;
  progress: number;
  goal: number;
  top_contributions: {
    user_id: string;
    user_login: string;
    user_name: string;
    type: "bits" | "subscription"; // Add more types if needed
    total: number;
  }[];
  last_contribution: {
    user_id: string;
    user_login: string;
    user_name: string;
    type: "bits" | "subscription"; // Add more types if needed
    total: number;
  };
  started_at: string; // You can use Date type if you parse the string to a Date object
  expires_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelHypeTrainEndEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  level: number;
  total: number;
  top_contributions: {
    user_id: string;
    user_login: string;
    user_name: string;
    type: "bits" | "subscription"; // Add more types if needed
    total: number;
  }[];
  started_at: string; // You can use Date type if you parse the string to a Date object
  ended_at: string; // You can use Date type if you parse the string to a Date object
  cooldown_ends_at: string; // You can use Date type if you parse the string to a Date object
}

export interface ChannelCharityCampaignDonateEvent {
  id: string;
  campaign_id: string;
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  user_id: string;
  user_login: string;
  user_name: string;
  charity_name: string;
  charity_description: string;
  charity_logo: string;
  charity_website: string;
  amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
}

export interface ChannelCharityCampaignStartEvent {
  id: string;
  broadcaster_id: string;
  broadcaster_name: string;
  broadcaster_login: string;
  charity_name: string;
  charity_description: string;
  charity_logo: string;
  charity_website: string;
  current_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
  target_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
  started_at: string;
}

export interface ChannelCharityCampaignProgressEvent {
  id: string;
  broadcaster_id: string;
  broadcaster_name: string;
  broadcaster_login: string;
  charity_name: string;
  charity_description: string;
  charity_logo: string;
  charity_website: string;
  current_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
  target_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
}

export interface ChannelCharityCampaignStopEvent {
  id: string;
  broadcaster_id: string;
  broadcaster_name: string;
  broadcaster_login: string;
  charity_name: string;
  charity_description: string;
  charity_logo: string;
  charity_website: string;
  current_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
  target_amount: {
    value: number;
    decimal_places: number;
    currency: string;
  };
  stopped_at: string;
}

export interface ChannelShieldModeBeginEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  moderator_user_id: string;
  moderator_user_name: string;
  moderator_user_login: string;
  started_at: string;
}

export interface ChannelShieldModeEndEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  moderator_user_id: string;
  moderator_user_name: string;
  moderator_user_login: string;
  ended_at: string;
}

export interface ChannelShoutoutCreateEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  moderator_user_id: string;
  moderator_user_name: string;
  moderator_user_login: string;
  to_broadcaster_user_id: string;
  to_broadcaster_user_name: string;
  to_broadcaster_user_login: string;
  started_at: string;
  viewer_count: number;
  cooldown_ends_at: string;
  target_cooldown_ends_at: string;
}

export interface ChannelShoutoutReceiveEvent {
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  from_broadcaster_user_id: string;
  from_broadcaster_user_name: string;
  from_broadcaster_user_login: string;
  viewer_count: number;
  started_at: string;
}

export interface EntitlementGrantEvent {
  id: string;
  data: {
    organization_id: string;
    category_id: string;
    category_name: string;
    campaign_id: string;
    user_id: string;
    user_name: string; // display name
    user_login: string;
    entitlement_id: string;
    benefit_id: string;
    created_at: string;
  };
}

// TypeScript export interface for the payload containing multiple "Entitlement Grant Notification" events
export interface EntitlementGrantPayload {
  events: EntitlementGrantEvent[];
}

export interface ExtensionBitsTransactionCreateEvent {
  id: string;
  extension_client_id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  user_name: string;
  user_login: string;
  user_id: string;
  product: {
    name: string;
    sku: string;
    bits: number;
    in_development: boolean;
  };
}

export interface ChannelGoalBeginEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  type: string;
  description: string;
  current_amount: number;
  target_amount: number;
  started_at: string;
}

export interface ChannelGoalProgressEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  type: string;
  description: string;
  current_amount: number;
  target_amount: number;
  started_at: string;
}

export interface ChannelGoalAchievedEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_name: string;
  broadcaster_user_login: string;
  type: string;
  description: string;
  is_achieved: boolean;
  current_amount: number;
  target_amount: number;
  started_at: string;
  ended_at: string;
}

export interface StreamOnlineEvent {
  id: string;
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  type: string;
  started_at: string;
}

export interface StreamOfflineEvent {
  broadcaster_user_id: string;
  broadcaster_user_login: string;
  broadcaster_user_name: string;
  ended_at: string; // Timestamp when the stream went offline
}

export interface UserAuthorizationGrantEvent {
  client_id: string;
  user_id: string;
  user_login: string;
  user_name: string;
}

export interface UserAuthorizationRevocationEvent {
  client_id: string;
  user_id: string;
  user_login: string | null; // Null if the user no longer exists
  user_name: string | null; // Null if the user no longer exists
}

export interface UserUpdateEvent {
  user_id: string;
  user_login: string;
  user_name: string;
  email: string; // Requires user:read:email scope
  email_verified: boolean;
  description: string;
}


export interface TwitchEventState {
  channelUpdateData: ChannelUpdateEventData | undefined;
  followData: FollowEventData | undefined;
  subscribeData: SubscriptionEventData | undefined;
  subscriptionEndData: SubscriptionEndEvent | undefined;
  subscriptionGiftData: SubscriptionGiftEvent | undefined;
  subscriptionMessageData: SubscriptionMessageEvent | undefined;
  cheerData: BitCheerEvent | undefined;
  raidData: RaidEvent | undefined;
  banData: BanEvent | undefined;
  unbanData: UnbanEvent | undefined;
  moderatorAddData: ModeratorAddEvent | undefined;
  moderatorRemoveData: ModeratorRemoveEvent | undefined;
  guestStarSessionBeginData: ChannelGuestStarSessionBeginEvent | undefined;
  guestStarSessionEndData: ChannelGuestStarSessionEndEvent | undefined;
  guestStarGuestUpdateData: ChannelGuestStarGuestUpdateEvent | undefined;
  guestStarSlotUpdateData: ChannelGuestStarSlotUpdateEvent | undefined;
  guestStarSettingsUpdateData: ChannelGuestStarSettingsUpdateEvent | undefined;
  customRewardAddData: ChannelPointsCustomRewardAddEvent | undefined;
  customRewardUpdateData: ChannelPointsCustomRewardUpdateEvent | undefined;
  customRewardRemoveData: ChannelPointsCustomRewardUpdateEvent | undefined;
  customRewardRedemptionAddData: ChannelPointsCustomRewardRedemptionEvent | undefined;
  customRewardRedemptionUpdateData: ChannelPointsCustomRewardRedemptionUpdateEvent | undefined;
  pollBeginData: ChannelPollBeginEvent | undefined;
  pollProgressData: ChannelPollProgressEvent | undefined;
  pollEndData: ChannelPollEndEvent | undefined;
  predictionBeginData: ChannelPredictionBeginEvent | undefined;
  predictionProgressData: ChannelPredictionPredictionEvent | undefined;
  predictionLockData: ChannelPredictionLockEvent | undefined;
  predictionEndData: ChannelPredictionEndEvent | undefined;
  charityDonateData: ChannelCharityCampaignDonateEvent | undefined;
  charityStartData: ChannelCharityCampaignStartEvent | undefined;
  charityProgressData: ChannelCharityCampaignProgressEvent | undefined;
  charityStopData: ChannelCharityCampaignStopEvent | undefined;
  entitlementGrantData: EntitlementGrantPayload | undefined;
  bitsTransactionCreateData: ExtensionBitsTransactionCreateEvent | undefined;
  goalBeginData: ChannelGoalBeginEvent | undefined;
  goalProgressData: ChannelGoalProgressEvent | undefined;
  goalEndData: ChannelGoalAchievedEvent | undefined;
  hypeTrainBeginData: ChannelHypeTrainBeginEvent | undefined;
  hypeTrainProgressData: ChannelHypeTrainProgressEvent | undefined;
  hypeTrainEndData: ChannelHypeTrainEndEvent | undefined;
  shieldModeBeginData: ChannelShieldModeBeginEvent | undefined;
  shieldModeEndData: ChannelShieldModeEndEvent | undefined;
  shoutoutCreateData: ChannelShoutoutCreateEvent | undefined;
  shoutoutReceiveData: ChannelShoutoutReceiveEvent | undefined;
  streamOnlineData: StreamOnlineEvent | undefined;
  streamOfflineData: StreamOfflineEvent | undefined;
  userAuthorizationGrantData: UserAuthorizationGrantEvent | undefined;
  userAuthorizationRevokeData: UserAuthorizationRevocationEvent | undefined;
  userUpdateData: UserUpdateEvent | undefined;
}