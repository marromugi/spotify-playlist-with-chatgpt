import { COOKIES_KEY } from "@/const/cookie";
import { fetcher } from "@/utils/api";
import { cookies } from "next/headers";

type SearchParams = Pick<
  SpotifyApi.SearchForItemParameterObject,
  "q"
> & { types: ("album" | "artist")[] };

export const search = async ({ q, types }: SearchParams) => {
  const res = await fetcher(
    `https://api.spotify.com/v1/search?q=${q}&type=${types.join(",")}`,
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

  return res;
};
