import { APP_URL } from "./app";

/**Note: these parameter can use only server-side */
export const SPOTIFY_ENV = {
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
};

/**Note: this parameter can use only server-side */
export const SPOTIFY_REDIRECT_URI = `${APP_URL}/api/redirect`;

export const SPOTIFY_PLAYER_NAME = "magi";
