export const ROUTES = {
  top: "/",
  playlist: "/playlist",
  album: (id: string) => `/albums/${id}`,
};

export const SPOTIFY_API_ENDPOINT = {
  play: (deviceId?: string) =>
    `https://api.spotify.com/v1/me/player/play${
      deviceId ? `?device_id=${deviceId}` : ""
    }`,
};
