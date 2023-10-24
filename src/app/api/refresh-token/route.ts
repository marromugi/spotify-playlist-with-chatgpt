import { COOKIES_KEY } from "@/const/cookie";
import { SpotifyTokenResponse } from "@/types/spotify";
import {
  generateSpotifyBasicAuthorizationToken,
  generateUrlSearchParam,
} from "@/utils/query";
import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  console.log(cookies().getAll());
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

  if (res.ok) {
    const data: SpotifyTokenResponse = await res.json();

    cookies().set({
      name: COOKIES_KEY.spotifyAccessToken,
      value: data.access_token,
      maxAge: data.expires_in,
      httpOnly: true,
      path: "/",
    });

    const r = new Response(null, {
      status: 200,
      headers: Object.fromEntries(headers()),
    });
    console.log(request.cookies.getAll());
    console.log(request);

    return r;
  }

  return new Response(null, { status: 400 });
};
