import { getAlbum, getArtistAllAlbums, getArtists } from "@/api";
import { AlbumIdPageProps } from "./_type";
import clsx from "clsx";
import {
  CalendarIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/20/solid";
import { Card, Image } from "@/components/ui";
import {
  getSpotifyAlbumReleaseYear,
  getSpotifyAlbumTotalDuration,
} from "@/utils/features/album";
import {
  generateArtistsNameText,
  getArtistThumbnailSrc,
} from "@/utils/features/artist";
import { AlbumSection, TrackSection } from "./_components/section";
import Link from "next/link";
import { Timeline } from "./_components";

export const AlbumPage = async ({ params }: AlbumIdPageProps) => {
  const album = await getAlbum({ id: params.id });
  const artists = await getArtists({
    ids: album?.artists.map((artist) => artist.id) ?? [],
  });
  const artist = artists[0];
  const albums = await getArtistAllAlbums({ id: artist.id });

  if (!album || !albums) {
    return <>Album not found</>;
  }

  return (
    <div className={clsx("tw-px-4")}>
      <div
        className={clsx("tw-h-screen tw-flex tw-flex-col", "tw-gap-3")}
      >
        <div
          className={clsx(
            "tw-grid tw-grid-cols-8 tw-grid-rows-1",
            "tw-flex-1 tw-h-1",
            "tw-pt-4",
            "tw-gap-x-3",
          )}
        >
          <section
            className={clsx(
              "tw-col-span-2",
              "tw-flex-col tw-flex tw-gap-3",
              "tw-overflow-hidden",
            )}
          >
            <Image
              src={album.images[0].url}
              alt={album.name}
              className={clsx("tw-rounded-xl")}
            />
            <Card className={clsx("tw-flex-1")}>
              <h2
                className={clsx(
                  "tw-text-white tw-font-bold tw-text-xl",
                  "tw-line-clamp-2",
                )}
              >
                {album.name}
              </h2>
              <span className={clsx("tw-text-sm tw-text-sumi-400")}>
                {album.artists.map((a) => a.name).join(" ,")}
              </span>
              <div
                className={clsx(
                  "tw-flex tw-items-center tw-flex-wrap",
                  "tw-gap-3",
                )}
              >
                <span
                  className={clsx(
                    "tw-flex tw-items-center tw-gap-1",
                    "tw-text-sumi-400 tw-text-sm",
                  )}
                >
                  <CalendarIcon className={clsx("tw-w-4")} />
                  {getSpotifyAlbumReleaseYear(album)}
                </span>
                <span
                  className={clsx(
                    "tw-flex tw-items-center tw-gap-1",
                    "tw-text-sumi-400 tw-text-sm",
                  )}
                >
                  <PlayCircleIcon className={clsx("tw-w-4")} />
                  {album.total_tracks}曲
                </span>
                <span
                  className={clsx(
                    "tw-flex tw-items-center tw-gap-1",
                    "tw-text-sumi-400 tw-text-sm",
                  )}
                >
                  <ClockIcon className={clsx("tw-w-4")} />
                  {getSpotifyAlbumTotalDuration(album)}
                </span>
              </div>
            </Card>
            <Card>
              <div
                className={clsx("tw-flex tw-items-center", "tw-gap-4")}
              >
                <Image
                  src={getArtistThumbnailSrc(artists[0])}
                  alt={album.name}
                  className={clsx("tw-rounded-full tw-w-10")}
                />
                <div className={clsx("tw-space-y-1")}>
                  <h2 className={clsx("tw-font-bold")}>
                    {artists[0].name}
                  </h2>
                  <span className={clsx("tw-text-xs tw-text-sumi-300")}>
                    フォロワー：
                    {artist.followers.total.toLocaleString()}人
                  </span>
                </div>
              </div>
            </Card>
          </section>
          <section
            className={clsx(
              "tw-col-span-6",
              "tw-flex tw-flex-col tw-gap-3",
            )}
          >
            <TrackSection album={album} />
            <AlbumSection albums={albums} />
          </section>
        </div>
        <Card
          className={clsx(
            "tw-h-28 tw-mb-4",
            "tw-flex-shrink-0",
            "tw-overflow-x-auto tw-overflow-y-hidden",
            "tw-scrollbar-hidden",
          )}
        >
          {/* <Timeline album={album} artists={artists} /> */}
        </Card>
      </div>
    </div>
  );
};

export default AlbumPage;
