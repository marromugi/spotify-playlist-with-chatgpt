import { mockExternalUrls } from "./externalUrl";

export const mockArtistSimplified: SpotifyApi.ArtistObjectSimplified = {
  name: "Meow Meow",
  id: "001",
  type: "artist",
  href: "http://localhost:3000/artists/001",
  external_urls: mockExternalUrls,
  uri: "",
};

export const mockArtistFull: SpotifyApi.ArtistObjectFull = {
  external_urls: {
    spotify: "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
  },
  followers: {
    href: null,
    total: 3183239,
  },
  genres: [
    "anime",
    "classic j-pop",
    "j-pop",
    "japanese singer-songwriter",
  ],
  href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
  id: "7lbSsjYACZHn1MSDXPxNF2",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/ab6761610000e5ebec0a49aeb06b8319cc6c9766",
      width: 640,
    },
    {
      height: 320,
      url: "https://i.scdn.co/image/ab67616100005174ec0a49aeb06b8319cc6c9766",
      width: 320,
    },
    {
      height: 160,
      url: "https://i.scdn.co/image/ab6761610000f178ec0a49aeb06b8319cc6c9766",
      width: 160,
    },
  ],
  name: "Hikaru Utada",
  popularity: 65,
  type: "artist",
  uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
};
