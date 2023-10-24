import { getUserPlaylist } from "@/api";
import { API_STATUS_TEXT } from "@/const/message";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const id = request.nextUrl.searchParams.get("id");
  const playlist = await getUserPlaylist({ id: id ?? "-" });

  if (playlist) {
    return Response.json(playlist);
  }

  return new Response("プレイリストを取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
