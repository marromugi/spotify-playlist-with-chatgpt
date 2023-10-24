import {
  LoginButton,
  PlaylistButton,
  SearchFrom,
  TopTracks,
} from "./_components";
import { UserButton } from "./_components/UserButton/UserButton";

export default async function Home() {
  return (
    <>
      <LoginButton />
      <UserButton />
      <PlaylistButton />
      {/* <Playlist /> */}
      {/* <RecentlyPlayedTracks /> */}
      <SearchFrom />
      <TopTracks />
    </>
  );
}
