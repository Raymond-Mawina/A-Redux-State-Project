import { openGarageDoor } from "../features/garageDoor/actions.js";
import { switchOnLighting, dimLights } from "../features/lighting/actions.js";
import { switchOnDiscoball } from "../features/discoBall/actions.js";
import {
  setDoorbellVolume,
  switchOnDoorbell,
} from "../features/doorBell/actions.js";
import {
  setMusicplayerCurrentSongPlaying,
  setMusicplayerPlaylist,
  setMusicplayerVolume,
  switchOnMusicplayer,
} from "../features/musicPlayer/actions.js";

export function partyMode() {
  return (dispatch) => {
    dispatch(switchOnLighting("Kitchen", true));
    dispatch(switchOnLighting("Lounge", true));
    dispatch(dimLights("Lounge", true));
    dispatch(openGarageDoor(true));
    dispatch(switchOnDiscoball(true));
    dispatch(switchOnDoorbell(true));
    dispatch(setDoorbellVolume("high"));
    dispatch(switchOnMusicplayer(true));
    dispatch(setMusicplayerVolume("high"));
    dispatch(setMusicplayerPlaylist("Kwaito"));
    dispatch(setMusicplayerCurrentSongPlaying("Maphorisa"));
  };
}
