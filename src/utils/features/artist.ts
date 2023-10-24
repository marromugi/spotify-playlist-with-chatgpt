export const getArtistThumbnailSrc = (
  artist: SpotifyApi.ArtistObjectFull,
) => {
  if (artist.images.length > 0) {
    return artist.images[0].url;
  }
  return "/images/artist-empty.png";
};

export const generateArtistsNameText = (
  artists: SpotifyApi.ArtistObjectSimplified[],
) => {
  return artists.map((artist) => artist.name).join(", ");
};
