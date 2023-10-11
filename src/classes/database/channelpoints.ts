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
    console.log(id, channelID);
    try {
      let search = await database.listDocuments<ChannnelPointsStorage>(this.database, channelID.toString(), [
        Query.equal("channelpointID", id),
        Query.equal("channelID", +channelID),
        Query.limit(1),
      ]);
      return search;
    } catch (error) {
      throw new Error("Error getting data from database");
    }
  }

  //remove a channel point by id and channel id
  async removeChannelPoint(id: string, channelID: string) {
    const search = await this.searchChannelPointByID(id, channelID);
    console.log(search)
    if (search?.total === 0) return;

    const documentID = search.documents[0].$id;


    try {
      await database.deleteDocument(this.database, channelID, documentID);
    } catch (error) {
      console.log(error);
    }
  }
}

const ChannelPointDB = new channelPointDB();

export { ChannelPointDB };
