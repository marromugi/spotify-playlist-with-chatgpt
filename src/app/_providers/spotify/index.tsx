// Note: window参照するため、use client
"use client";

import { SPOTIFY_PLAYER_NAME } from "@/const/spotify";
import { usePlayback, usePlayer } from "@/hooks/features/player";
import Script from "next/script";
import { useEffect } from "react";

export const SpotifyProvider = ({ token }: { token?: string }) => {
  const { set: setPlayback } = usePlayback();
  const { set: setPlayer } = usePlayer();
  useEffect(() => {
    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new Spotify.Player({
        name: SPOTIFY_PLAYER_NAME,
        getOAuthToken: (cb) => {
          cb(token ?? "-");
        },
        volume: 0.1,
      });

      // Ready
      player.addListener("ready", ({ device_id }) => {
        console.log("Ready with Device ID", device_id);
        setPlayer({
          player,
          deviceId: device_id,
        });
      });

      // Not Ready
      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("initialization_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("authentication_error", ({ message }) => {
        console.error(message);
        // TODO: refresh token
      });

      player.addListener("account_error", ({ message }) => {
        console.error(message);
      });

      player.addListener("player_state_changed", (state) => {
        console.error(state);
        setPlayback({ playback: state });
      });

      player.connect().then((r) => {
        console.log(r);
      });

      return () => {
        player.disconnect();
        player.removeListener("ready", () => {});
        player.removeListener("not_ready", () => {});
        player.removeListener("initialization_error", () => {});
        player.removeListener("authentication_error", () => {});
        player.removeListener("account_error", () => {});
        player.removeListener("player_state_changed", () => {});
        setPlayer({ player: null, deviceId: null });
      };
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Script src="https://sdk.scdn.co/spotify-player.js" />
    </>
  );
};
