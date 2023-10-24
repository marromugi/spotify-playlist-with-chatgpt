import { refreshToken } from "@/api";
import { COOKIES_KEY } from "@/const/cookie";
import { SpotifyRefreshTokenResponse } from "@/types/spotify";
import { cookies } from "next/headers";

const generateBaseHeader = (init?: RequestInit | undefined) => {
  return {
    ...init?.headers,
    Authorization: `Bearer ${cookies().get(
      COOKIES_KEY.spotifyAccessToken,
    )?.value}`,
    "Accept-Language": "ja",
  };
};

export const fetcher = async (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => {
  const res = await fetch(input, {
    ...init,
    headers: generateBaseHeader(init),
  });

  // Note: リフレッシュ可能な場合にトークンを再取得する
  if (
    res.status === 401 &&
    cookies().get(COOKIES_KEY.spotifyRefreshToken)?.value
  ) {
    const refreshRes = await refreshToken();

    // Note: トークンの更新に成功した場合は、リクエストを再送する
    if (refreshRes.ok) {
      const { access_token }: SpotifyRefreshTokenResponse =
        await refreshRes.json();
      return await fetch(input, {
        ...init,
        headers: generateBaseHeader(init),
      });
    }
  }

  return res;
};
