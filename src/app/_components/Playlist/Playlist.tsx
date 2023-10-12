import { getPlaylist } from "@/api";
import { Tracks } from "./Tracks";

export const Playlist = async () => {
  const playlists = await getPlaylist();

  if (!playlists) {
    return <></>;
  }

  return (
    <section>
      {playlists.items.map((playlist, i) => (
        <div key={playlist.id}>
          {playlist.images.length > 0 && (
            <img
              className={"tw-w-20 tw-h-20"}
              src={playlist.images[0].url}
              alt={"thumbnail"}
            />
          )}
          <h2>{playlist.name}</h2>
          <p>{playlist.description}</p>
          {i === 0 && (
            <Tracks
              userId={playlist.owner.id}
              playlistId={playlist.id}
            />
          )}
        </div>
      ))}
    </section>
  );
};
