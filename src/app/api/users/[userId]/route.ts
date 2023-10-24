import { getUser } from "@/api";
import { API_STATUS_TEXT } from "@/const/message";
import { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // Note: get user profile
  // ref: https://developer.spotify.com/documentation/web-api/reference/get-users-profile
  const user = await getUser({
    id: request.nextUrl.searchParams.get("userId") ?? "",
  });

  if (user) {
    return Response.json(user);
  }

  return new Response("ユーザー情報を取得できませんでした", {
    status: 400,
    statusText: API_STATUS_TEXT[400],
  });
};
