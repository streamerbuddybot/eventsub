import { Models } from "node-appwrite";

interface ChannelPoints {
  channelpointID: string;
  channelID: number;
  function: string
  message: string;
}


export interface ChannnelPointsStorage extends Models.Document, ChannelPoints{}