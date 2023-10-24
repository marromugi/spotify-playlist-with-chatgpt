"use server";

import { COOKIES_KEY } from "@/const/cookie";
import { fetcher } from "@/utils/api";
import { cookies } from "next/headers";

export const getMyTopTracks = async () => {
  const res = await fetcher(
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
