import { getMyPlaylist } from "@/api";
import { API_STATUS_TEXT } from "@/const/message";

export const GET = async () => {
  const playlist = await getMyPlaylist();

  if (playlist) {
    return Response.json(playlist);
  }

  return Response.json(
    { message: "プレイリストを取得できませんでした" },
    {
      status: 400,
      statusText: API_STATUS_TEXT[400],
    },
  );
};
