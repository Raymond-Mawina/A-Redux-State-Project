import { types } from "./types.js";

export const switchOnDoorbell = (switchedOn) => ({
  type: types.DOORBELL_SWITCHON,
  payload: {
    switchedOn: switchedOn,
  },
});

export const setDoorbellVolume = (volume_option) => ({
  type: types.DOORBELL_SETVOLUME,
  payload: {
    volume: volume_option,
  },
});
