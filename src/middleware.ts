import { COOKIES_KEY } from "@/const/cookie";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  generateSpotifyBasicAuthorizationToken,
  generateUrlSearchParam,
} from "@/utils/query";

/** トークンが切れている場合にrefreshする */
export async function middleware(request: NextRequest) {
  const { access_token, refresh_token } = {
    access_token: request.cookies.get(COOKIES_KEY.spotifyAccessToken)
      ?.value,
    refresh_token: request.cookies.get(COOKIES_KEY.spotifyRefreshToken)
      ?.value,
  };
  const response = NextResponse.next();

  if (access_token || !refresh_token) {
    return response;
  }

  const res = await fetch(`https://accounts.spotify.com/api/token`, {
    method: "POST",
    headers: {
      Authorization: generateSpotifyBasicAuthorizationToken(),
    },
    body: generateUrlSearchParam({
      grant_type: "refresh_token",
      refresh_token,
    }),
    cache: "no-store",
  });

  if (res.ok) {
    const data = await res.json();

    response.cookies.set({
      name: COOKIES_KEY.spotifyAccessToken,
      value: data.access_token,
      maxAge: data.expires_in,
      httpOnly: true,
      path: "/",
    });
  }

  return response;
}
