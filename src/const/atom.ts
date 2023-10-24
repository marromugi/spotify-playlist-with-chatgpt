import { atom } from "jotai";

export const playerAtom = atom<{
  player: Spotify.Player | null;
  deviceId: string | null;
}>({
  player: null,
  deviceId: null,
});
