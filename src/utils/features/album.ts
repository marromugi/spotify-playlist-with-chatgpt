import { convertSecondsToMin } from "../datetime";

export const getSpotifyAlbumReleaseYear = (
  album: SpotifyApi.AlbumObjectSimplified,
) => {
  return album.release_date.split("-")[0];
};

export const getSpotifyAlbumTotalDuration = (
  album: SpotifyApi.AlbumObjectFull,
) => {
  const totalDurationMs = album.tracks.items.reduce((acc, cur) => {
    return acc + cur.duration_ms;
  }, 0);
  return convertSecondsToMin(totalDurationMs / 1000);
};
