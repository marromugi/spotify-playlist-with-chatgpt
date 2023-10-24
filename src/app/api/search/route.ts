import { search } from "@/api";
import { API_STATUS_TEXT } from "@/const/message";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const { q, type } = {
    q: req.nextUrl.searchParams.get("q") ?? "",
    type: req.nextUrl.searchParams.get("type"),
  };
  const res = await search({
    q,
    types: (!!type ? type.split(",") : ["artist", "album"]) as (
      | "album"
      | "artist"
    )[],
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }

  return Response.json(
    { message: "検索結果を取得できませんでした" },
    {
      status: 400,
      statusText: API_STATUS_TEXT[400],
    },
  );
};
