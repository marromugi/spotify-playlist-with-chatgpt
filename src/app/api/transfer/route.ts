import { transfer } from "@/api";
import { NextRequest } from "next/server";

export const PUT = async (request: NextRequest) => {
  const { deviceId } = {
    deviceId: request.nextUrl.searchParams.get("deviceId"),
  };
  //const params = await request.json();
  const res = await transfer({
    device_id: deviceId ?? "",
    //...params,
  });

  if (res.ok) {
    return new Response(`started/resumed to play song`, {
      status: 200,
    });
  }

  return res;
};
