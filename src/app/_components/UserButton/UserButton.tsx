"use client";

import { Button } from "@/components/ui";

export const UserButton = () => {
  return (
    <Button
      onClick={async () => {
        const res = await fetch("/api/me");
        console.log(await res.json());
      }}
    >
      Spotify Me
    </Button>
  );
};
