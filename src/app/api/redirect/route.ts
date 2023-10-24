import { redirect } from "next/navigation";
import { NextRequest } from "next/server";
import { REDIRECT_SEARCH_PARAMS_KEY } from "./_const";
import { ROUTES } from "@/const/route";
import { SPOTIFY_REDIRECT_URI } from "@/const/spotify";
import {
  generateSpotifyBasicAuthorizationToken,
  generateUrlSearchParam,
} from "@/utils/query";
import { COOKIES_KEY } from "@/const/cookie";
import { cookies } from "next/headers";
import { SpotifyTokenResponse } from "@/types/spotify";

export const GET = async (request: NextRequest) => {
  if (
    !request.nextUrl.searchParams.has(REDIRECT_SEARCH_PARAMS_KEY.code)
  ) {
    // TODO: error handling
    return redirect(ROUTES.top);
  }

  // Note: get token using code in searchParam
  // ref: https://developer.spotify.com/documentation/web-api/tutorials/code-flow
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: generateSpotifyBasicAuthorizationToken(),
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: generateUrlSearchParam({
      code: request.nextUrl.searchParams.get(
        REDIRECT_SEARCH_PARAMS_KEY.code,
      ),
      redirect_uri: SPOTIFY_REDIRECT_URI,
      grant_type: "authorization_code",
    }),
    cache: "no-store",
  });

  if (res.ok) {
    const data: SpotifyTokenResponse = await res.json();

    cookies().set({
      name: COOKIES_KEY.spotifyAccessToken,
      value: data.access_token,
      maxAge: data.expires_in,
      httpOnly: true,
      path: "/",
    });

    cookies().set({
      name: COOKIES_KEY.spotifyRefreshToken,
      value: data.refresh_token,
      httpOnly: true,
      path: "/",
    });

    redirect(ROUTES.playlist);
  }

  redirect(ROUTES.top);
};
