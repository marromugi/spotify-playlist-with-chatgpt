import { COOKIES_KEY } from "@/const/cookie";
import {
  generateSpotifyBasicAuthorizationToken,
  generateUrlSearchParam,
} from "@/utils/query";
import { cookies } from "next/headers";

export const refreshToken = async () => {
  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: generateSpotifyBasicAuthorizationToken(),
    },
    body: generateUrlSearchParam({
      grant_type: "refresh_token",
      refresh_token: cookies().get(COOKIES_KEY.spotifyRefreshToken)
        ?.value,
    }),
    cache: "no-store",
  });

  return res;
};
