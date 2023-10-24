import { getMyTopTracks } from "@/api";

export const TopTracks = async () => {
  const tracks = await getMyTopTracks();

  if (!tracks) {
    return <></>;
  }

  return (
    <ul>
      {tracks.items.map((i) => (
        <li key={i.id} className={"tw-mt-4"}>
          {i.album.images.length > 0 && (
            <img
              className={"tw-w-20 tw-h-20"}
              src={i.album.images[0].url}
              alt={"thumbnail"}
            />
          )}
          {i.name}
        </li>
      ))}
    </ul>
  );
};
