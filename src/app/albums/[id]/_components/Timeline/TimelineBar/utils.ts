"use server";

import { play } from "@/api";

export const handleClickTimeline = async ({
  positionMs,
  deviceId,
  uri,
  position,
}: {
  positionMs: number;
  deviceId: string | null;
  uri: string;
  position: number;
}) => {
  const res = await play({
    device_id: deviceId ?? "",
    context_uri: uri,
    offset: { position },
    position_ms: positionMs,
  });
};
