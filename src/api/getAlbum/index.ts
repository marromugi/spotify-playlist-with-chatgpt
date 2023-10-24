import { fetcher } from "@/utils/api";

export const getAlbum = async ({ id }: { id: string }) => {
  const res = await fetcher(`https://api.spotify.com/v1/albums/${id}`, {
    method: "GET",
    cache: "force-cache",
  });

  return res.ok
    ? ((await res.json()) as SpotifyApi.AlbumObjectFull)
    : null;
};
