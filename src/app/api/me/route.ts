import { getMe } from "@/api";
import { COOKIES_KEY } from "@/const/cookie";
import { API_STATUS_TEXT } from "@/const/message";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // Note: get current user profile
  // ref: https://developer.spotify.com/documentation/web-api/reference/get-current-users-profile
  const me = await getMe();

  if (me) {
    cookies().set({
      name: COOKIES_KEY.spotifyUserId,
      value: me.id,
      maxAge: 3600,
      httpOnly: true,
      path: "/",
    });

    return Response.json(me);
  }

  return new Response("ユーザー情報を取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
