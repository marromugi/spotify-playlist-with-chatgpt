import { fetcher } from "@/utils/api";

export const getArtists = async ({ ids }: { ids: string[] }) => {
  if (ids.length === 0) return [];

  const res = await Promise.all(
    ids.map(
      async (id) =>
        await fetcher(`https://api.spotify.com/v1/artists/${id}`, {
          method: "GET",
          cache: "force-cache",
        }),
    ),
  );

  return res.some((r) => r.ok)
    ? await Promise.all(
        res
          .filter((r) => r.ok)
          .map(
            async (r) =>
              (await r.json()) as SpotifyApi.ArtistObjectFull,
          ),
      )
    : [];
};
