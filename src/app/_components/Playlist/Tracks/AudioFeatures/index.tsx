import { getAudioFeatures } from "@/api";

export const AudioFeatures = async ({
  trackId,
}: {
  trackId: string;
}) => {
  const audioFeatures = await getAudioFeatures({ trackId });

  if (!audioFeatures) {
    return <>No AudioFeatures</>;
  }

  return (
    <>
      <ul className={"tw-mt-2"}>
        <li>Acousticness: {audioFeatures.acousticness}</li>
        <li>Danceability: {audioFeatures.danceability}</li>
        <li>Energy: {audioFeatures.energy}</li>
        <li>Instrumentalness: {audioFeatures.instrumentalness}</li>
        <li>Liveness: {audioFeatures.liveness}</li>
        <li>Loudness: {audioFeatures.loudness}</li>
        <li>Speechiness: {audioFeatures.speechiness}</li>
        <li>Tempo: {audioFeatures.tempo}</li>
        <li>Valence: {audioFeatures.valence}</li>
      </ul>
    </>
  );
};
