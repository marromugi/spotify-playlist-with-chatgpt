import { COOKIES_KEY } from "@/const/cookie";
import { cookies } from "next/headers";

export const getAudioFeatures = async ({
  trackId,
}: {
  trackId: string;
}) => {
  const res = await fetch(
    `https://api.spotify.com/v1/audio-features/${trackId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookies().get(
          COOKIES_KEY.spotifyAccessToken,
        )?.value}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.AudioFeaturesResponse)
    : null;
};
