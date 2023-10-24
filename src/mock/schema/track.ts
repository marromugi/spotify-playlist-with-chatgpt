import { mockAlbumSimplified } from "./album";
import { mockArtistSimplified } from "./artist";
import { mockExternalIds } from "./externalId";
import { mockExternalUrls } from "./externalUrl";

export const mockTrackFull: SpotifyApi.TrackObjectFull = {
  album: mockAlbumSimplified,
  external_ids: mockExternalIds,
  popularity: 0,
  artists: [mockArtistSimplified],
  disc_number: 0,
  duration_ms: 340,
  explicit: false,
  external_urls: mockExternalUrls,
  href: "/aa/aa",
  id: "001",
  name: "Cat Track 001",
  preview_url: null,
  track_number: 1,
  type: "track",
  uri: "",
};
