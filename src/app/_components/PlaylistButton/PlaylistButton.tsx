"use client";

import { Button } from "@/components/ui";

export const PlaylistButton = () => {
  return (
    <Button
      onClick={async () => {
        const res = await fetch("/api/me/playlist");
      }}
    >
      Spotify Playlist
    </Button>
  );
};
