import { COOKIES_KEY } from "@/const/cookie";
import { fetcher } from "@/utils/api";
import { cookies } from "next/headers";

export const transfer = async ({
  device_id,
  ...params
}: {
  device_id: string;
} & SpotifyApi.TransferPlaybackParameterObject) => {
  const res = await fetcher(`https://api.spotify.com/v1/me/player`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${cookies().get(
        COOKIES_KEY.spotifyAccessToken,
      )?.value}`,
    },
    body: JSON.stringify({
      device_ids: [device_id],
      ...params,
    }),
    cache: "no-store",
  });

  console.log(res);

  return res;
};
