import { Query } from "node-appwrite";
import { database } from "../../utils/appwrite";
import { ChannnelPointsStorage } from "../../types/database/channelpoints";

class channelPointDB {
  database: string;
  constructor() {
    this.database = "64f5a59d96ce3e17ffe2";
  }

  //search for a channel point by id and channel id
  async searchChannelPointByID(id: string, channelID: string) {
    try {
      let search = await database.listDocuments<ChannnelPointsStorage>(this.database, channelID.toString(), [
        Query.equal("channelpointID", id),
        Query.equal("channelID", +channelID),
        Query.limit(1),
      ]);
      return search;
    } catch (error) {
      console.log(error);
    }
  }
}

const ChannelPointDB = new channelPointDB();

export { ChannelPointDB };
