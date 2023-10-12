import { COOKIES_KEY } from "@/const/cookie";
import { API_STATUS_TEXT } from "@/const/message";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const res = await fetch(
    `https://api.spotify.com/v1/users/${
      cookies().get(COOKIES_KEY.spotifyUserId)?.value ?? "-"
    }/playlists`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${request.cookies.get(
          COOKIES_KEY.spotifyAccessToken,
        )?.value}`,
      },
      next: {
        // 30 sec
        // プレイリストの更新が行われた後に反映したいので短めに設定
        revalidate: 30,
      },
    },
  );

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }

  return new Response("プレイリストを取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
