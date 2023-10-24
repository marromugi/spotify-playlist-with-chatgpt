import { getPlaylistTracks } from "@/api/getPlaylistTracks";
import { API_STATUS_TEXT } from "@/const/message";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const { userId, playlistId } = {
    userId: request.nextUrl.searchParams.get("userId") ?? "",
    playlistId: request.nextUrl.searchParams.get("playlistId") ?? "",
  };

  const tracks = await getPlaylistTracks({ userId, playlistId });

  if (tracks) {
    return Response.json(tracks);
  }

  return Response.json(
    { message: "プレイリスト内の曲を取得できませんでした" },
    {
      status: 400,
      statusText: API_STATUS_TEXT[400],
    },
  );
};
