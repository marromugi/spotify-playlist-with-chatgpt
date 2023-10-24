export type SpotifyTokenResponse = {
  access_token: string;
  token_type: "Bearer";
  expires_in: number;
  refresh_token: string;
  scope: string; // "playlist-read-private" etc
};

export type SpotifyRefreshTokenResponse = Omit<
  SpotifyTokenResponse,
  "refresh_token"
>;
