import { getRecentlyPlayedTracks } from "@/api";

export const RecentlyPlayedTracks = async () => {
  const recent = await getRecentlyPlayedTracks();

  if (!recent) {
    return <></>;
  }

  return (
    <section>
      {recent.items.map(({ track }) => (
        <div key={track.id}>
          {track.album.images.length > 0 && (
            <img
              className={"tw-w-20 tw-h-20"}
              src={track.album.images[0].url}
              alt={"thumbnail"}
            />
          )}
          <h2>{track.name}</h2>
        </div>
      ))}
    </section>
  );
};
