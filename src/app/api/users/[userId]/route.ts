import { COOKIES_KEY } from "@/const/cookie";
import { API_STATUS_TEXT } from "@/const/message";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // Note: get user profile
  // ref: https://developer.spotify.com/documentation/web-api/reference/get-users-profile
  const res = await fetch(
    `https://api.spotify.com/v1/user/${request.nextUrl.searchParams.get(
      "userId",
    )}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies().get(
          COOKIES_KEY.spotifyAccessToken,
        )}`,
      },
      cache: "force-cache",
      next: {
        revalidate: 60 * 60, // 1 hour
      },
    },
  );

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }

  return new Response("ユーザー情報を取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
