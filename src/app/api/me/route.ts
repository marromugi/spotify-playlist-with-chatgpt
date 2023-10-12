import { COOKIES_KEY } from "@/const/cookie";
import { API_STATUS_TEXT } from "@/const/message";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // Note: get current user profile
  // ref: https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
  const res = await fetch("https://api.spotify.com/v1/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookies().get(
        COOKIES_KEY.spotifyAccessToken,
      )?.value}`,
    },
    cache: "no-store",
  });

  if (res.ok) {
    const data: SpotifyApi.UserProfileResponse = await res.json();
    cookies().set({
      name: COOKIES_KEY.spotifyUserId,
      value: data.id,
      maxAge: 3600,
      httpOnly: true,
      path: "/",
    });

    return Response.json(data);
  }

  return new Response("ユーザー情報を取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
