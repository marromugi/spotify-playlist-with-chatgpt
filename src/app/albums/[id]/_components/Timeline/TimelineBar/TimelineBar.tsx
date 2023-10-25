"use client";

import clsx from "clsx";
import { TimelineBarProps } from "./type";
import { Clickable } from "@/components/ui";
import { calcTrackPosition } from "../utils";
import { usePlay, usePlayer } from "@/hooks/features/player";

export const TimelineBar = ({
  album,
  position,
  width,
}: TimelineBarProps) => {
  const { deviceId } = usePlayer();
  const { trigger } = usePlay({ deviceId: deviceId ?? "" });

  return (
    <Clickable
      className={clsx(
        "tw-w-full",
        "tw-flex-shrink-0",
        "tw-flex tw-items-center tw-gap-1",
      )}
      style={{ width }}
      onClick={(e) =>
        trigger({
          context_uri: album.uri,
          offset: { position },
          position_ms: calcTrackPosition({
            e,
            track: album.tracks.items[position],
            width,
          }),
        })
      }
    >
      {Array.from(Array(50)).map((i) => (
        <span
          key={`timeline-bar-${position}-${i}`}
          className={clsx("tw-h-10 tw-w-10", "tw-bg-sumi-800")}
        ></span>
      ))}
    </Clickable>
  );
};
