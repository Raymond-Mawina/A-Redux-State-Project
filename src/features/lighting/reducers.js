import { types } from "./types.js";

function getIndex(state, action) {
  return state.findIndex(
    (light) => light.roomLocation === action.payload.location
  );
}

function toggleLightSwitch(state, action) {
  const stateCopy = [...state];
  const index = getIndex(state, action);
  if (index === -1) return stateCopy;

  stateCopy[index].switchedOn = action.payload.switchedOn;
  return stateCopy;
}

function toggleLightDimming(state, action) {
  const stateCopy = [...state];
  const index = getIndex(state, action);
  if (index === -1) return stateCopy;
  stateCopy[index].lightsDimmed = action.payload.dimmed;
  return stateCopy;
}

const initialState = [
  {
    roomLocation: "Bedroom",
    switchedOn: false,
    lightsDimmed: false,
  },
  {
    roomLocation: "Kitchen",
    switchedOn: false,
    lightsDimmed: false,
  },
  {
    roomLocation: "Lounge",
    switchedOn: false,
    lightsDimmed: false,
  },
];

const lightingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIGHTING_SWITCHON:
      return toggleLightSwitch(state, action, true);

    case types.LIGHTING_SWITCHOFF:
      return toggleLightSwitch(state, action, false);

    case types.DIM_LIGHTS:
      return toggleLightDimming(state, action, true);

    case types.UNDIM_LIGHTS:
      return toggleLightDimming(state, action, false);

    default:
      return state;
  }
};

export default lightingReducer;
