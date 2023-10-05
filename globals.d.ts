declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    DB_URL: string;
    DB_NAME?: string;
    JWT_SECRET: string;
    BACKEND_SERVER: string;
    TWITCHAPI: string;
    TWITCH_CLIENT_ID: string;
    TWITCH_CLIENT_SECRET: string;
    BOT_NAME: string;
    IRC_AUTH: string;
    PREFIX: string;
    SPOTIFY_CLIENT_ID: string;
    SPOTIFY_CLIENT_SECRET: string;
    EVENTSECRET: string;
    APPWRITE_ENDPOINT: string;
    APPWRITE_PROJECT_ID: string;
    APPWRITE_API_KEY: string;
    APPWRITE_DATABASE_ID: string;
    APPWRITE_COMMANDS_COLLECTION_ID: string;
    APPWRITE_IRC_COLLECTION_ID: string
  }
}
