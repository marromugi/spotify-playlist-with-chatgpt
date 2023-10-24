import { fetcher } from "@/utils/api";

export const getMe = async () => {
  const res = await fetcher("https://api.spotify.com/v1/me", {
    method: "GET",
    cache: "no-store",
  });

  return res.ok
    ? ((await res.json()) as SpotifyApi.UserProfileResponse)
    : null;
};
