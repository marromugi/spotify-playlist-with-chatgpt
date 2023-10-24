import { fetcher } from "@/utils/api";

export const getUser = async ({ id }: { id: string }) => {
  const res = await fetcher(`https://api.spotify.com/v1/user/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  return res.ok
    ? ((await res.json()) as SpotifyApi.UserProfileResponse)
    : null;
};
