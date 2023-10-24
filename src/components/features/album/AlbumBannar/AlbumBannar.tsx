import clsx from "clsx";
import { AlbumBannarProps } from "./type";
import {
  CalendarIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

export const AlbumBannar = ({ album }: AlbumBannarProps) => {
  const artistName = album.artists
    .map((artist) => artist.name)
    .join(",");
  const imageUrl = album.images.length > 0 ? album.images[0].url : "";
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
        className={clsx("tw-w-20 tw-h-20", "tw-rounded")}
      />
      <div className={clsx("tw-text-sm")}>
        <h3 className={clsx("tw-font-bold")}>{album.name}</h3>
        <h4
          className={clsx("tw-text-sumi-300", "tw-mt-1")}
        >{`${artistName}`}</h4>
        <div
          className={clsx(
            "tw-flex tw-items-center",
            "tw-mt-2 tw-gap-2",
            "tw-text-xs",
            "tw-text-sumi-300",
          )}
        >
          <div className={clsx("tw-flex tw-items-center tw-gap-1")}>
            <CalendarIcon className={clsx("tw-w-4 tw-h-4")} />
            {album.release_date.split("-")[0]}
          </div>
          <div className={clsx("tw-flex tw-items-center tw-gap-1")}>
            <PlayCircleIcon className={clsx("tw-w-4 tw-h-4")} />
            {album.total_tracks}曲
          </div>
        </div>
      </div>
    </article>
  );
};
