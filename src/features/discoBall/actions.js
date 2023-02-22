import { types } from "./types.js";

export const switchOnDiscoball = (switchedOn) => ({
  type: types.DISCOBALL_SWITCHON,
  payload: {
    switchedOn: switchedOn,
  },
});
