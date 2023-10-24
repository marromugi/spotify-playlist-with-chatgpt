"use client";

import { Card } from "@/components/ui";
import { convertMillSecondsToMin } from "@/utils/datetime";
import { generateArtistsNameText } from "@/utils/features/artist";
import clsx from "clsx";
import { TrackSectionProps } from "./type";
import { useAtomValue } from "jotai";
import { playerAtom } from "@/const/atom";
import { usePlay } from "@/hooks/features/player";

export const TrackSection = ({ album }: TrackSectionProps) => {
  const { deviceId } = useAtomValue(playerAtom);
  const { trigger } = usePlay({ deviceId: deviceId ?? "" });

  const handleRowClick = (position: number) => {
    trigger({
      context_uri: album.uri,
      offset: { position },
    });
  };

  return (
    <Card
      className={clsx(
        "tw-flex-1 tw-overflow-auto",
        "tw-scrollbar-hidden",
      )}
    >
      <table>
        <tbody>
          {album?.tracks.items.map((track, i) => (
            <tr
              className={clsx(
                "tw-h-10",
                "tw-gap-4",
                "tw-text-sm",
                "tw-text-sumi-300",
              )}
              tabIndex={0}
              role="button"
              onClick={() => handleRowClick(i)}
            >
              <td>{i + 1}</td>
              <td
                className={clsx(
                  "tw-font-semibold tw-text-white tw-text-base",
                )}
              >
                {track.name}
              </td>
              <td>{generateArtistsNameText(track.artists)}</td>
              <td>{convertMillSecondsToMin(track.duration_ms)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
