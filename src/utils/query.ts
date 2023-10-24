import { COOKIES_KEY } from "@/const/cookie";
import { SPOTIFY_ENV } from "@/const/spotify";
import { cookies } from "next/headers";

export const generateUrlWithQueryParams = (
  url: string,
  params: { [key in string]?: string },
) => {
  const query = Object.entries(params)
    .filter(([_key, value]) => value !== undefined)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `${url}?${query}`;
};

export const generateUrlSearchParam = (data: {
  [key in string]?: string | number | null;
}) => {
  const params = new URLSearchParams();
  Object.keys(data)
    .filter((key) => !!data[key])
    .forEach((key) => params.append(key, data[key]?.toString() ?? "-"));
  return params;
};

export const generateCookieHeader = (
  keys: (keyof typeof COOKIES_KEY)[],
) => {
  return keys
    .map((key) => {
      const cookie = COOKIES_KEY[key];
      return `${cookie}=${cookies().get(cookie)?.value}`;
    })
    .join("; ");
};

export const generateSpotifyBasicAuthorizationToken = () => {
  return `Basic ${Buffer.from(
    `${SPOTIFY_ENV.clientId}:${SPOTIFY_ENV.clientSecret}`,
  ).toString("base64")}`;
};
