import clsx from "clsx";
import { TrackBannarProps } from "./type";
import { ClockIcon } from "@heroicons/react/20/solid";
import { convertSecondsToMin } from "@/utils/datetime";

export const TrackBannar = ({ track }: TrackBannarProps) => {
  const imageUrl =
    track.album.images.length > 0 ? track.album.images[0].url : "";
  return (
    <article
      className={clsx(
        "tw-flex tw-items-center",
        "tw-gap-3",
        "tw-w-full",
      )}
    >
      <img
        src={imageUrl}
        alt="album-artwork"
        className={clsx("tw-w-14 tw-h-14", "tw-rounded")}
      />
      <div className={clsx("tw-text-sm")}>
        <h3 className={clsx("tw-font-bold")}>{track.name}</h3>
        <span
          className={clsx(
            "tw-flex tw-items-center",
            "tw-mt-1",
            "tw-gap-1",
            "tw-text-sm",
            "tw-text-sumi-300",
          )}
        >
          <ClockIcon className={clsx("tw-w-4")} />
          {convertSecondsToMin(track.duration_ms)}
        </span>
      </div>
    </article>
  );
};
