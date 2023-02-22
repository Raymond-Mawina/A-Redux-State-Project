import { types } from "./types.js";

export const switchOnMusicplayer = () => ({
  type: types.MUSICPLAYER_SWITCHON,
});

export const setMusicplayerVolume = (volume_option) => ({
  type: types.MUSICPLAYER_SETVOLUME,
  payload: {
    volume: volume_option,
  },
});

export const setMusicplayerPlaylist = (playlist) => ({
  type: types.MUSICPLAYER_SETPLAYLIST,
  payload: {
    playlist: playlist,
  },
});

export const setMusicplayerCurrentSongPlaying = (currentSong) => ({
  type: types.MUSICPLAYER_SETCURRENTSONGPLAYING,
  payload: {
    currentSong: currentSong,
  },
});
