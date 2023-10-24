import { fetcher } from "@/utils/api";

export const getUserPlaylist = async ({ id }: { id: string }) => {
  const res = await fetcher(
    `https://api.spotify.com/v1/users/${id}/playlists`,
    {
      method: "GET",
      next: {
        // 30 sec
        // プレイリストの更新が行われた後に反映したいので短めに設定
        revalidate: 30,
      },
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.PlaylistSearchResponse)
    : null;
};
