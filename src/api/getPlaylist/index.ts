import { COOKIES_KEY } from "@/const/cookie";
import { cookies } from "next/headers";

export const getPlaylist = async () => {
  const res = await fetch(`https://api.spotify.com/v1/me/playlists`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${cookies().get(
        COOKIES_KEY.spotifyAccessToken,
      )?.value}`,
    },
    next: {
      // 30 sec
      // プレイリストの更新が行われた後に反映したいので短めに設定
      revalidate: 30,
    },
  });

  return res.ok
    ? ((await res.json()) as SpotifyApi.ListOfUsersPlaylistsResponse)
    : null;
};
