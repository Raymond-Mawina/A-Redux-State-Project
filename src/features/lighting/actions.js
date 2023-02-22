import { types } from "./types.js";

export const switchOnLighting = (roomLocation, switchedOn) => ({
  type: types.LIGHTING_SWITCHON,
  payload: {
    location: roomLocation,
    switchedOn: switchedOn,
  },
});

export const dimLights = (roomLocation, dimmed) => ({
  type: types.DIM_LIGHTS,
  payload: {
    location: roomLocation,
    dimmed: dimmed,
  },
});
