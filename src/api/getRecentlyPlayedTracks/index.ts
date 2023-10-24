import { fetcher } from "@/utils/api";

export const getRecentlyPlayedTracks = async () => {
  const res = await fetcher(
    `https://api.spotify.com/v1/me/player/recently-played?limit=50`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.UsersRecentlyPlayedTracksResponse)
    : null;
};
