export const convertToUniqueAlbums = (
  albums: SpotifyApi.AlbumObjectSimplified[],
): SpotifyApi.AlbumObjectSimplified[] => {
  const uniqueAlbumsMap = new Map(
    albums.map((album) => [album.id, album]),
  );

  console.log(uniqueAlbumsMap.values());

  return Array.from(uniqueAlbumsMap.values());
};
