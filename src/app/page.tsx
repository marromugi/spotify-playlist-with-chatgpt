import {
  LoginButton,
  PlaylistButton,
  RecentlyPlayedTracks,
  TopTracks,
} from "./_components";
import { Playlist } from "./_components/Playlist";
import { UserButton } from "./_components/UserButton/UserButton";

export default async function Home() {
  return (
    <>
      <LoginButton />
      <UserButton />
      <PlaylistButton />
      {/* <Playlist /> */}
      {/* <RecentlyPlayedTracks /> */}
      <TopTracks />
    </>
  );
}
