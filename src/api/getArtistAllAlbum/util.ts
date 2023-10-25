export const convertToUniqueAlbums = (
  albums: SpotifyApi.AlbumObjectSimplified[],
): SpotifyApi.AlbumObjectSimplified[] => {
  const uniqueAlbumsMap = new Map(
    albums.map((album) => [album.id, album]),
  );

  return Array.from(uniqueAlbumsMap.values());
};
