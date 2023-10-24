import { TIMELINE_MINITE_WIDTH } from "./const";

export const calcTrackWidth = (
  track: SpotifyApi.TrackObjectSimplified,
) => {
  const MIN_WIDTH = 150;
  return Math.max(
    (track.duration_ms / 1000 / 60) * TIMELINE_MINITE_WIDTH,
    MIN_WIDTH,
  );
};

/**クリックされたポジションから再生時間を算出 */
export const calcTrackPosition = ({
  e,
  track,
  width,
}: {
  e: React.MouseEvent<HTMLElement, MouseEvent>;
  track: SpotifyApi.TrackObjectSimplified;
  /**トラックバーの長さ */
  width: number;
}) => {
  const relativePos =
    e.pageX -
    e.currentTarget.getBoundingClientRect().left +
    window.scrollX;

  return track.duration_ms * (relativePos / width);
};

/**クリックした要素の相対的なポジションを計算する */
export const calcRelativeClickPosition = (
  e: React.MouseEvent<HTMLElement, MouseEvent>,
) => {
  return (
    e.pageX -
    e.currentTarget.getBoundingClientRect().left +
    window.scrollX
  );
};
