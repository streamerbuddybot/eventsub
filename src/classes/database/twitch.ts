import { Query } from "node-appwrite";
import { database } from "../../utils/appwrite";
import { TwitchUser, TwitchUserStorage } from "../../types/database/twitch";

class TwitchDB {
  databaseID: string;
  collectionID: string;

  constructor() {
    this.databaseID = "64392da4b5e0c9e0949d";
    this.collectionID = "64393117418a284d87a6";
  }

  //get the streamewr details based of channelID
  async getStreamer(channelID: string) {
    try {
      const search = await database.listDocuments<TwitchUserStorage>(this.databaseID, this.collectionID, [
        Query.limit(1),
        Query.equal("channelID", +channelID),
      ]);
      return search;
    } catch (error) {
      throw new Error("Error getting data from database");
    }
  }

  //set the streamer to live
  async setStreamerOnline(channelID: string) {
    const search = await this.getStreamer(channelID);
    if (search.total === 0) return;

    const documentID = search.documents[0].$id;

    try {
      await database.updateDocument<TwitchUserStorage>(this.databaseID, this.collectionID, documentID, {
        isLive: true,
      } as TwitchUserStorage);
    } catch (error) {
      console.log(error);
    }
  }

  //set the streamer to offline
  async setStreamerOffline(channelID: string) {
    const search = await this.getStreamer(channelID);
    if (search.total === 0) return;

    const documentID = search.documents[0].$id;

    try {
      await database.updateDocument<TwitchUserStorage>(this.databaseID, this.collectionID, documentID, {
        isLive: false,
      } as TwitchUserStorage);
    } catch (error) {
      console.log(error);
    }
  }
}

export const TwitchDBHandler = new TwitchDB();
