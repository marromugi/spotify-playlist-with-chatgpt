import { convertMillSecondsToMin } from "@/utils/datetime";
import clsx from "clsx";
import { TimelineTrackProps } from "./type";

export const TimelineTrack = ({
  track,
  artists,
}: TimelineTrackProps) => {
  const relatedArtists = artists.filter((artist) =>
    track.artists.some((a) => a.id === artist.id),
  );
  return (
    <div
      className={clsx(
        "tw-w-full",
        "tw-flex tw-items-center",
        "tw-rounded-md tw-bg-sumi-1000",
      )}
    >
      <div
        className={clsx(
          "tw-sticky tw-left-0",
          "tw-flex tw-items-center",
          "tw-gap-1",
          "tw-p-2",
        )}
      >
        {relatedArtists.map((artist) => (
          <img
            key={artist.id}
            src={
              artist.images.length > 0
                ? artist.images[0].url
                : "/images/artist-empty.png"
            }
            className={clsx("tw-rounded-full", "tw-w-10 tw-h-10")}
            alt={"artist-image"}
          />
        ))}
        <div className={clsx("tw-flex tw-flex-col", "tw-gap-[2px]")}>
          <span
            className={clsx(
              "tw-font-semibold tw-text-sm",
              "tw-line-clamp-1",
            )}
          >
            {track.name}
          </span>
          <span
            className={clsx(
              "tw-text-sumi-300 tw-text-xs",
              "tw-line-clamp-1",
            )}
          >
            {convertMillSecondsToMin(track.duration_ms)} /{" "}
            {track.artists.map((artist) => artist.name).join(", ")}{" "}
          </span>
        </div>
      </div>
    </div>
  );
};
