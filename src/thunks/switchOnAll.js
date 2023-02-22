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

export function switchOnAll() {
  return (dispatch) => {
    dispatch(switchOnLighting("Bedroom", true));
    dispatch(switchOnLighting("Kitchen", true));
    dispatch(dimLights("Lounge", true));
    dispatch(switchOnLighting("Lounge", true));
    dispatch(setAlarmOn("Wake Me", true));
    dispatch(setAlarmOn("Sleep", true));
    dispatch(openGarageDoor(true));
    dispatch(switchOnDiscoball(true));
    dispatch(switchOnDoorbell(true));
    dispatch(setDoorbellVolume("medium"));
    dispatch(setMusicplayerVolume("medium"));
    dispatch(setMusicplayerPlaylist("Amapiano"));
    dispatch(setMusicplayerCurrentSongPlaying("Ba strata"));
    dispatch(switchOnMusicplayer(true));
  };
}
