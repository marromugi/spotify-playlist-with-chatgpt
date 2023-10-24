"use server";

import { COOKIES_KEY } from "@/const/cookie";
import { cookies } from "next/headers";

export const setAccessToken = ({
  access_token,
  expires_in,
}: {
  access_token: string;
  expires_in: number;
}) => {
  cookies().set({
    name: COOKIES_KEY.spotifyAccessToken,
    value: access_token,
    maxAge: expires_in,
    httpOnly: true,
    path: "/",
  });
};
