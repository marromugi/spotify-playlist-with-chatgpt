import clsx from "clsx";
import { TimelineProps } from "./type";
import { TimelineTrack } from "./TimelineTrack";
import { calcTrackWidth } from "./utils";
import { useMemo } from "react";
import { TimelineBar } from "./TimelineBar";
import { getArtist } from "@/api";

export const Timeline = async ({ album, artists }: TimelineProps) => {
  const trackBarItems = useMemo(
    () =>
      album.tracks.items.map((track) => ({
        track,
        width: calcTrackWidth(track),
      })),
    [album.tracks.items],
  );
  return (
    <section className={clsx("tw-w-screen", "tw-space-y-2")}>
      <div
        className={clsx(
          "tw-w-full",
          "tw-overflow-auto",
          "tw-scrollbar-hidden",
          "tw-space-y-2",
        )}
      >
        <div className={clsx("tw-flex", "tw-gap-1")}>
          {trackBarItems.map(({ track, width }) => (
            <div
              key={`timeline-track-${track.id}`}
              className={clsx("tw-flex-shrink-0", "tw-space-y-2")}
              style={{ width }}
            >
              <TimelineTrack track={track} artists={artists} />
            </div>
          ))}
        </div>
        <div className={clsx("tw-flex", "tw-gap-1")}>
          {trackBarItems.map(({ track, width }, index) => (
            <TimelineBar
              key={`timeline-bar-${track.id}`}
              album={album}
              position={index}
              width={width}
            />
          ))}
        </div>
      </div>
      <div
        className={clsx(
          "tw-w-full",
          "tw-flex tw-items-center tw-justify-between",
          "tw-text-sm tw-text-sumi-300",
        )}
      >
        <span>3:05</span>
        <span>-42:09</span>
      </div>
    </section>
  );
};
