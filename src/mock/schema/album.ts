import { mockArtistSimplified } from "./artist";
import { mockExternalUrls } from "./externalUrl";
import { mockImage } from "./image";

export const mockAlbumSimplified: SpotifyApi.AlbumObjectSimplified = {
  album_type: "album",
  artists: [mockArtistSimplified],
  id: "001",
  images: [mockImage],
  name: "Cat Songs",
  release_date: "2023",
  release_date_precision: "year",
  type: "album",
  total_tracks: 8,
  href: "http://localhost:3000/albums/001",
  external_urls: mockExternalUrls,
  uri: "",
};

export const mockAlbumFull: SpotifyApi.AlbumObjectFull = {
  album_type: "album",
  artists: [
    {
      external_urls: {
        spotify:
          "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
      },
      href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
      id: "7lbSsjYACZHn1MSDXPxNF2",
      name: "Hikaru Utada",
      type: "artist",
      uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
    },
  ],
  copyrights: [
    {
      text: "(P) 2020(5,7),2021(2-4,11),2022(1,6,8,10,12,14) Sony Music Labels Inc. / 2019(9,13) Sony Music Entertainment (Japan) Inc.",
      type: "P",
    },
  ],
  external_ids: {
    upc: "4547366549522",
  },
  external_urls: {
    spotify: "https://open.spotify.com/album/7Kxd4i6FPfW0ZuP3Q96uij",
  },
  genres: [],
  href: "https://api.spotify.com/v1/albums/7Kxd4i6FPfW0ZuP3Q96uij",
  id: "7Kxd4i6FPfW0ZuP3Q96uij",
  images: [
    {
      height: 640,
      url: "https://i.scdn.co/image/ab67616d0000b2736b6652f833b0a2d5569932ba",
      width: 640,
    },
    {
      height: 300,
      url: "https://i.scdn.co/image/ab67616d00001e026b6652f833b0a2d5569932ba",
      width: 300,
    },
    {
      height: 64,
      url: "https://i.scdn.co/image/ab67616d000048516b6652f833b0a2d5569932ba",
      width: 64,
    },
  ],
  label: "Sony Music Labels Inc.",
  name: "BADモード",
  popularity: 61,
  release_date: "2022-01-19",
  release_date_precision: "day",
  total_tracks: 14,
  tracks: {
    href: "https://api.spotify.com/v1/albums/7Kxd4i6FPfW0ZuP3Q96uij/tracks?offset=0&limit=50&locale=*",
    items: [
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 303218,
        explicit: true,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/3TxjMrMGWFP0jkIy0tVvVn",
        },
        href: "https://api.spotify.com/v1/tracks/3TxjMrMGWFP0jkIy0tVvVn",
        id: "3TxjMrMGWFP0jkIy0tVvVn",

        name: "BADモード",
        preview_url:
          "https://p.scdn.co/mp3-preview/b20a419c16fccd90e606d56ad43720e590d12edb?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 1,
        type: "track",
        uri: "spotify:track:3TxjMrMGWFP0jkIy0tVvVn",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 257953,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/0oxWaHk4e669g5VHbQCflA",
        },
        href: "https://api.spotify.com/v1/tracks/0oxWaHk4e669g5VHbQCflA",
        id: "0oxWaHk4e669g5VHbQCflA",

        name: "君に夢中",
        preview_url:
          "https://p.scdn.co/mp3-preview/e181782ecede805360290227652fdaa4c74dd947?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 2,
        type: "track",
        uri: "spotify:track:0oxWaHk4e669g5VHbQCflA",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 249904,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/6DaKMsQDmHMJbKYyU7AUFA",
        },
        href: "https://api.spotify.com/v1/tracks/6DaKMsQDmHMJbKYyU7AUFA",
        id: "6DaKMsQDmHMJbKYyU7AUFA",

        name: "One Last Kiss",
        preview_url:
          "https://p.scdn.co/mp3-preview/311a48b7046b98e7df2cc488904405ea1b0bc379?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 3,
        type: "track",
        uri: "spotify:track:6DaKMsQDmHMJbKYyU7AUFA",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 197361,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/2EK2DrH59MHythSLcW3Akp",
        },
        href: "https://api.spotify.com/v1/tracks/2EK2DrH59MHythSLcW3Akp",
        id: "2EK2DrH59MHythSLcW3Akp",

        name: "PINK BLOOD",
        preview_url:
          "https://p.scdn.co/mp3-preview/d6693636153fc58f8b5f9a15a4d967d9b4a88c51?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 4,
        type: "track",
        uri: "spotify:track:2EK2DrH59MHythSLcW3Akp",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 298251,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/6VhTruRaK9CnSMVsGPM3Jt",
        },
        href: "https://api.spotify.com/v1/tracks/6VhTruRaK9CnSMVsGPM3Jt",
        id: "6VhTruRaK9CnSMVsGPM3Jt",

        name: "Time",
        preview_url:
          "https://p.scdn.co/mp3-preview/99874221e13a39ccdc2542196de5525f00ac17b8?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 5,
        type: "track",
        uri: "spotify:track:6VhTruRaK9CnSMVsGPM3Jt",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 448103,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/0KhwC1YQp9LbLpzAejRWZB",
        },
        href: "https://api.spotify.com/v1/tracks/0KhwC1YQp9LbLpzAejRWZB",
        id: "0KhwC1YQp9LbLpzAejRWZB",

        name: "気分じゃないの (Not In The Mood)",
        preview_url:
          "https://p.scdn.co/mp3-preview/da8c2ec3adcfe52a967101e4e7e29c44d113279e?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 6,
        type: "track",
        uri: "spotify:track:0KhwC1YQp9LbLpzAejRWZB",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 280017,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/285pt0UtBFSim3KgeL5Lsb",
        },
        href: "https://api.spotify.com/v1/tracks/285pt0UtBFSim3KgeL5Lsb",
        id: "285pt0UtBFSim3KgeL5Lsb",

        name: "誰にも言わない",
        preview_url:
          "https://p.scdn.co/mp3-preview/4a34dda9877312d9a42ad2169a10d05a7b6a79ee?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 7,
        type: "track",
        uri: "spotify:track:285pt0UtBFSim3KgeL5Lsb",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 277854,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/7BaExHeRww0LxV4yuYIFSL",
        },
        href: "https://api.spotify.com/v1/tracks/7BaExHeRww0LxV4yuYIFSL",
        id: "7BaExHeRww0LxV4yuYIFSL",

        name: "Find Love",
        preview_url:
          "https://p.scdn.co/mp3-preview/01ebf1caafda47671ecefb574cfb47f5684befb1?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 8,
        type: "track",
        uri: "spotify:track:7BaExHeRww0LxV4yuYIFSL",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX",
            },
            href: "https://api.spotify.com/v1/artists/5he5w2lnU9x7JFhnwcekXX",
            id: "5he5w2lnU9x7JFhnwcekXX",
            name: "Skrillex",
            type: "artist",
            uri: "spotify:artist:5he5w2lnU9x7JFhnwcekXX",
          },
        ],
        disc_number: 1,
        duration_ms: 218214,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/4PvZYIfjE3xrVWLnCwXzYF",
        },
        href: "https://api.spotify.com/v1/tracks/4PvZYIfjE3xrVWLnCwXzYF",
        id: "4PvZYIfjE3xrVWLnCwXzYF",

        name: "Face My Fears (Japanese Version)",
        preview_url:
          "https://p.scdn.co/mp3-preview/dd4dad0d628edd57eaecadaa1ea16de0cfd68ea4?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 9,
        type: "track",
        uri: "spotify:track:4PvZYIfjE3xrVWLnCwXzYF",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 714585,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/5ai97hAB5rHiV2luX5NWw5",
        },
        href: "https://api.spotify.com/v1/tracks/5ai97hAB5rHiV2luX5NWw5",
        id: "5ai97hAB5rHiV2luX5NWw5",

        name: "Somewhere Near Marseilles ーマルセイユ辺りー",
        preview_url:
          "https://p.scdn.co/mp3-preview/2f7623caba779ac5395aa5282f8465b0dd4e6ae1?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 10,
        type: "track",
        uri: "spotify:track:5ai97hAB5rHiV2luX5NWw5",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 357886,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/3FkvCm3og2WMkkKChxvfIk",
        },
        href: "https://api.spotify.com/v1/tracks/3FkvCm3og2WMkkKChxvfIk",
        id: "3FkvCm3og2WMkkKChxvfIk",

        name: "Beautiful World - Da Capo Version",
        preview_url:
          "https://p.scdn.co/mp3-preview/68649832b4adf6fef9e9eda5583273eb922555e6?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 11,
        type: "track",
        uri: "spotify:track:3FkvCm3og2WMkkKChxvfIk",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
        ],
        disc_number: 1,
        duration_ms: 277860,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/5FiBD3iIcnpsmxC9AtiFj8",
        },
        href: "https://api.spotify.com/v1/tracks/5FiBD3iIcnpsmxC9AtiFj8",
        id: "5FiBD3iIcnpsmxC9AtiFj8",

        name: "キレイな人 (Find Love)",
        preview_url:
          "https://p.scdn.co/mp3-preview/ab3852b7c5862da985564be929a9dd49e3c73cf6?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 12,
        type: "track",
        uri: "spotify:track:5FiBD3iIcnpsmxC9AtiFj8",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/5he5w2lnU9x7JFhnwcekXX",
            },
            href: "https://api.spotify.com/v1/artists/5he5w2lnU9x7JFhnwcekXX",
            id: "5he5w2lnU9x7JFhnwcekXX",
            name: "Skrillex",
            type: "artist",
            uri: "spotify:artist:5he5w2lnU9x7JFhnwcekXX",
          },
        ],
        disc_number: 1,
        duration_ms: 219121,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/71vwMp0XFmCn0sWucZwews",
        },
        href: "https://api.spotify.com/v1/tracks/71vwMp0XFmCn0sWucZwews",
        id: "71vwMp0XFmCn0sWucZwews",

        name: "Face My Fears (English Version)",
        preview_url:
          "https://p.scdn.co/mp3-preview/f96037a8bbe8df827e2af761a4392b766021371d?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 13,
        type: "track",
        uri: "spotify:track:71vwMp0XFmCn0sWucZwews",
      },
      {
        artists: [
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/7lbSsjYACZHn1MSDXPxNF2",
            },
            href: "https://api.spotify.com/v1/artists/7lbSsjYACZHn1MSDXPxNF2",
            id: "7lbSsjYACZHn1MSDXPxNF2",
            name: "Hikaru Utada",
            type: "artist",
            uri: "spotify:artist:7lbSsjYACZHn1MSDXPxNF2",
          },
          {
            external_urls: {
              spotify:
                "https://open.spotify.com/artist/335TWGWGFan4vaacJzSiU8",
            },
            href: "https://api.spotify.com/v1/artists/335TWGWGFan4vaacJzSiU8",
            id: "335TWGWGFan4vaacJzSiU8",
            name: "A. G. Cook",
            type: "artist",
            uri: "spotify:artist:335TWGWGFan4vaacJzSiU8",
          },
        ],
        disc_number: 1,
        duration_ms: 322018,
        explicit: false,
        external_urls: {
          spotify:
            "https://open.spotify.com/track/2ssaf4sOUhVJMzWVBAesa8",
        },
        href: "https://api.spotify.com/v1/tracks/2ssaf4sOUhVJMzWVBAesa8",
        id: "2ssaf4sOUhVJMzWVBAesa8",

        name: "Face My Fears - A. G. Cook Remix",
        preview_url:
          "https://p.scdn.co/mp3-preview/bf6b75a38ca09d927b76e1c774ba6a6309f9920c?cid=9a402b82c1dc4eafa12584ca1fd28e4c",
        track_number: 14,
        type: "track",
        uri: "spotify:track:2ssaf4sOUhVJMzWVBAesa8",
      },
    ],
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 14,
  },
  type: "album",
  uri: "spotify:album:7Kxd4i6FPfW0ZuP3Q96uij",
};
