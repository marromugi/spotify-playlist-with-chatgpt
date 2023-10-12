"use client";

import { Button } from "@/components/ui";

export const PlaylistButton = () => {
  return (
    <Button
      onClick={async () => {
        const res = await fetch("/api/me/playlist");
        console.log(await res.json());
      }}
    >
      Spotify Playlist
    </Button>
  );
};
