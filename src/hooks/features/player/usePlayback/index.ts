import { create } from "zustand";

type State = {
  playback: Spotify.PlaybackState | null;
};

type Action = {
  set: (state: State) => void;
};

export const usePlayback = create<State & Action>()((_set) => ({
  playback: null,
  set: (state) => {
    _set(state);
  },
}));
