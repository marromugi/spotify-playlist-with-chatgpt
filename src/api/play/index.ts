import { COOKIES_KEY } from "@/const/cookie";
import { SPOTIFY_API_ENDPOINT } from "@/const/route";
import { fetcher } from "@/utils/api";
import { cookies } from "next/headers";

export const play = async ({
  device_id,
  ...params
}: SpotifyApi.PlayParameterObject) => {
  const res = await fetcher(SPOTIFY_API_ENDPOINT.play(device_id), {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${cookies().get(
        COOKIES_KEY.spotifyAccessToken,
      )?.value}`,
    },
    body: JSON.stringify(params),
    cache: "no-store",
  });

  return res;
};
