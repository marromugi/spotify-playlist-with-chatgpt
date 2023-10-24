import { getAudioFeatures, getPlaylistTracks } from "@/api";
import { AudioFeatures } from "./AudioFeatures";

export const Tracks = async ({
  userId,
  playlistId,
}: {
  userId: string;
  playlistId: string;
}) => {
  const tracks = await getPlaylistTracks({ userId, playlistId });

  if (!tracks) {
    return <>No Tracks</>;
  }

  const audioFeatures = await Promise.all(
    tracks.items.map((i) =>
      getAudioFeatures({ trackId: i.track?.id ?? "-" }),
    ),
  );

  const calculate = audioFeatures.reduce(
    (prev, next) => ({
      acousticness: prev.acousticness + (next?.acousticness ?? 0),
      danceability: prev.danceability + (next?.danceability ?? 0),
      energy: prev.energy + (next?.energy ?? 0),
      instrumentalness:
        prev.instrumentalness + (next?.instrumentalness ?? 0),
      liveness: prev.liveness + (next?.liveness ?? 0),
      loudness: prev.loudness + (next?.loudness ?? 0),
      speechiness: prev.speechiness + (next?.speechiness ?? 0),
      tempo: prev.tempo + (next?.tempo ?? 0),
      valence: prev.valence + (next?.valence ?? 0),
    }),
    {
      acousticness: 0,
      danceability: 0,
      energy: 0,
      instrumentalness: 0,
      liveness: 0,
      loudness: 0,
      speechiness: 0,
      tempo: 0,
      valence: 0,
    },
  );

  const result = {
    acousticness: calculate.acousticness / audioFeatures.length,
    danceability: calculate.danceability / audioFeatures.length,
    energy: calculate.energy / audioFeatures.length,
    instrumentalness: calculate.instrumentalness / audioFeatures.length,
    liveness: calculate.liveness / audioFeatures.length,
    loudness: calculate.loudness / audioFeatures.length,
    speechiness: calculate.speechiness / audioFeatures.length,
    tempo: calculate.tempo / audioFeatures.length,
    valence: calculate.valence / audioFeatures.length,
  };

  return (
    <ul>
      {tracks.items
        .filter((i) => !!i.track)
        .map((i) => (
          <li key={i.track?.id} className={"tw-mt-4"}>
            {i.track?.name}
            <AudioFeatures trackId={i.track?.id ?? "-"} />
          </li>
        ))}
    </ul>
  );
};
