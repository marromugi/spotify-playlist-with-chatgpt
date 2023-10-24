import { fetcher } from "@/utils/api";

export const getArtist = async ({ id }: { id: string }) => {
  const res = await fetcher(
    `https://api.spotify.com/v1/artists/${id}`,
    {
      method: "GET",
      cache: "force-cache",
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.ArtistObjectFull)
    : null;
};
