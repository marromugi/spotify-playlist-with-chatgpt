import { fetcher } from "@/utils/api";

export const getAudioFeatures = async ({
  trackId,
}: {
  trackId: string;
}) => {
  const res = await fetcher(
    `https://api.spotify.com/v1/audio-features/${trackId}`,
    {
      method: "GET",
      next: {
        revalidate: 60 * 60 * 24,
      },
    },
  );

  return res.ok
    ? ((await res.json()) as SpotifyApi.AudioFeaturesResponse)
    : null;
};
