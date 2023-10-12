import { generateBase64Text } from "@/utils/string";

export const COOKIES_KEY = {
  spotifyAccessToken: generateBase64Text("SAT"),
  spotifyRefreshToken: generateBase64Text("SRT"),
  spotifyUserId: generateBase64Text("SUI"),
};
