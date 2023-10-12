import { COOKIES_KEY } from "@/const/cookie";
import { cookies } from "next/headers";

export const getTopTracks = async () => {
  const res = await fetch(
    `https://api.spotify.com/v1/me/top/tracks?limit=50`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies().get(
          COOKIES_KEY.spotifyAccessToken,
        )?.value}`,
      },
      cache: "no-store",
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.UsersTopTracksResponse)
    : null;
};
