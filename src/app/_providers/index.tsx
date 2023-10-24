import { cookies } from "next/headers";
import { SpotifyProvider } from "./spotify";
import { COOKIES_KEY } from "@/const/cookie";

export const AppProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <SpotifyProvider
        token={cookies().get(COOKIES_KEY.spotifyAccessToken)?.value}
      >
        {""}
      </SpotifyProvider>
      {children}
    </>
  );
};
