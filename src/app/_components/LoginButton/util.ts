import { SPOTIFY_ENV } from "@/const/spotify";
import { generateUrlWithQueryParams } from "@/utils/query";
import { generateRandomString } from "@/utils/string";

export const generateAuthUrl = () => {
  return generateUrlWithQueryParams(
    "https://accounts.spotify.com/authorize",
    {
      response_type: "code",
      client_id: SPOTIFY_ENV.clientId,
      // https://developer.spotify.com/documentation/web-api/concepts/scopes
      scope:
        "playlist-read-private playlist-read-collaborative user-read-recently-played user-top-read",
      redirect_uri: SPOTIFY_ENV.redirectUri,
      state: generateRandomString(16),
    },
  );
};
