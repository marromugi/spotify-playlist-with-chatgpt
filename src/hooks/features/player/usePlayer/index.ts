import { create } from "zustand";

type State = {
  player: Spotify.Player | null;
  deviceId: string | null;
};

type Action = {
  set: (state: State) => void;
};

export const usePlayer = create<State & Action>()((_set) => ({
  player: null,
  deviceId: null,
  set: (state) => {
    _set(state);
  },
}));
