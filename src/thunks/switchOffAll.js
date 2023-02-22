import { setAlarmOn } from "../features/alarmClock/actions.js";
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

export function switchOffAll() {
  return (dispatch) => {
    dispatch(switchOnLighting("Bedroom", false));
    dispatch(switchOnLighting("Kitchen", false));
    dispatch(dimLights("Lounge", false));
    dispatch(switchOnLighting("Lounge", false));
    dispatch(setAlarmOn("Wake Me", false));
    dispatch(setAlarmOn("Sleep", false));
    dispatch(openGarageDoor(false));
    dispatch(switchOnDiscoball(false));
    dispatch(switchOnDoorbell(false));
    dispatch(setDoorbellVolume("low"));
    dispatch(setMusicplayerVolume("low"));
    dispatch(setMusicplayerPlaylist("RNB"));
    dispatch(setMusicplayerCurrentSongPlaying("You touch my heart"));
    dispatch(switchOnMusicplayer(false));
  };
}
