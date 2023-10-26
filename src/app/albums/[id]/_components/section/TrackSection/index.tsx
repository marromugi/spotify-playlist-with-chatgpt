"use client";

import { Card } from "@/components/ui";
import { convertMillSecondsToMin } from "@/utils/datetime";
import { generateArtistsNameText } from "@/utils/features/artist";
import clsx from "clsx";
import { TrackSectionProps } from "./type";
import {
  usePlay,
  usePlayback,
  usePlayer,
} from "@/hooks/features/player";
import style from "./style.module.css";
import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import { APP_URL } from "@/const/app";

export const TrackSection = ({ album }: TrackSectionProps) => {
  const { deviceId, player } = usePlayer();
  const { playback } = usePlayback();
  const { trigger } = usePlay({ deviceId: deviceId ?? "dsg" });

  const handleRowClick = async (position: number) => {
    /**
     * Hack:
     * Safariでは、一度どこかで再生されていないとプレイヤーがロックされるため、
     * 無音の音源を再生してロックを解除する
     */
    // const audio = new Audio("/audio/_silence.mp3");
    // await audio.play();

    await player?.resume();
    await trigger({
      context_uri: album.uri,
      offset: {
        position,
      },
    });

    // await player?.resume();

    // await player?.resume();
  };

  useEffect(() => {
    if (deviceId) {
      fetch(`${APP_URL}/api/transfer?deviceId=${deviceId}`, {
        method: "PUT",
        body: JSON.stringify({ play: false }),
        cache: "no-store",
      });
      // trigger({
      //   context_uri: album.uri,
      //   offset: {
      //     position: 0,
      //   },
      // });
    }
  }, [deviceId]);

  return (
    <Card
      className={clsx(
        "tw-flex-1 tw-overflow-auto",
        "tw-scrollbar-hidden",
      )}
    >
      <button
        onClick={async () => {
          await player?.resume();
          await trigger({
            context_uri: album.uri,
            offset: {
              position: 1,
            },
          });
        }}
      >
        aaa
      </button>
      <table>
        <tbody>
          {album?.tracks.items.map((track, i) => {
            // Note: 同じ曲でもID等が異なるため、名前とアルバムのURIで比較
            const isPlaying =
              track.name ===
                playback?.track_window.current_track.name &&
              album.uri ===
                playback.track_window.current_track.album.uri;
            return (
              <tr
                key={`track-section-${track.id}`}
                className={clsx(
                  "tw-h-16",
                  "tw-relative",
                  "tw-text-sm",
                  "tw-rounded-md",
                  "tw-text-sumi-300",
                  // Note: ホバー時の背景色よりも文字を上に表示するためにz-indexを設定
                  "tw-z-10",
                  "[&>td]:tw-pl-4 last:[&>td]:tw-pr-4",
                  style.row,
                )}
                tabIndex={0}
                role="button"
                onClick={() => handleRowClick(i)}
              >
                <td>
                  <span
                    className={clsx(
                      "tw-flex tw-items-center tw-justify-center",
                      "tw-w-6",
                    )}
                  >
                    {isPlaying ? (
                      <PlayCircleIcon className={clsx("tw-w-6")} />
                    ) : (
                      i + 1
                    )}
                  </span>
                </td>
                <td
                  className={clsx(
                    "tw-font-semibold tw-text-white tw-text-base",
                  )}
                >
                  <span className={clsx("tw-line-clamp-1")}>
                    {track.name}
                  </span>
                </td>
                <td>
                  <span className={clsx("tw-line-clamp-1")}>
                    {generateArtistsNameText(track.artists)}
                  </span>
                </td>
                <td>{convertMillSecondsToMin(track.duration_ms)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
};
