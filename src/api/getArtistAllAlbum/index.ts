import { getArtistAlbums } from "..";
import { convertToUniqueAlbums } from "./util";

export const getArtistAllAlbums = async ({ id }: { id: string }) => {
  const albumsFirstFetched = await getArtistAlbums({
    id,
    limit: 50,
    offset: 0,
  });

  if (!albumsFirstFetched) {
    return null;
  }

  let restAlbumsCount = albumsFirstFetched.total - 50;
  const fetchHolder: Promise<SpotifyApi.ArtistsAlbumsResponse | null>[] =
    [];

  while (restAlbumsCount > 0) {
    const fetch = getArtistAlbums({
      id,
      limit: 50,
      offset: albumsFirstFetched.total - restAlbumsCount,
    });
    fetchHolder.push(fetch);
    restAlbumsCount -= 50;
  }

  const restAlbums = (await Promise.all(fetchHolder))
    .filter((res): res is SpotifyApi.ArtistsAlbumsResponse => !!res)
    .reduce(
      (prev, next) => [...prev, ...next.items],
      [] as SpotifyApi.AlbumObjectSimplified[],
    );

  return {
    ...albumsFirstFetched,
    items: convertToUniqueAlbums([
      ...albumsFirstFetched.items,
      ...restAlbums,
    ]),
  };
};
