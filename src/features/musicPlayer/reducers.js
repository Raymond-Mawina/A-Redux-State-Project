import { types } from "./types.js";

export const initialState = {
  musicPlayer: {
    switchedOn: false,
    volume: "low",
    playlist: "RNB",
    currentSong: "You touch my heart",
  },
};

const musicplayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MUSICPLAYER_SWITCHON:
      return { ...state, switchedOn: true };

    case types.MUSICPLAYER_SETVOLUME:
      return { ...state, volume: action.payload.volume };

    case types.MUSICPLAYER_SETPLAYLIST:
      return { ...state, playlist: action.payload.playlist };

    case types.MUSICPLAYER_SETCURRENTSONGPLAYING:
      return { ...state, currentSong: action.payload.currentSong };

    default:
      return state;
  }
};

export default musicplayerReducer;
