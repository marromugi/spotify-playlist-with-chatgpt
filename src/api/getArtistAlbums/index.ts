import { fetcher } from "@/utils/api";
import { generateUrlSearchParam } from "@/utils/query";

export const getArtistAlbums = async ({
  id,
  ...props
}: {
  id: string;
  limit?: number;
  offset?: number;
}) => {
  const res = await fetcher(
    `https://api.spotify.com/v1/artists/${id}/albums?${generateUrlSearchParam(
      { ...props },
    )}`,
    {
      method: "GET",
      cache: "force-cache",
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.ArtistsAlbumsResponse)
    : null;
};
