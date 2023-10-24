import { fetcher } from "@/utils/api";

export const getMyPlaylist = async () => {
  const res = await fetcher(`https://api.spotify.com/v1/me/playlists`, {
    method: "GET",
    cache: "no-store",
  });

  return res.ok
    ? ((await res.json()) as SpotifyApi.ListOfUsersPlaylistsResponse)
    : null;
};
