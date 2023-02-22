import { types } from "./types.js";

export const initialState = {
  switchedOn: false,
  volume: "low",
};

const doorbellReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DOORBELL_SWITCHON:
      return { ...state, switchedOn: action.payload.switchedOn };

    case types.DOORBELL_SETVOLUME:
      return { ...state, volume: action.payload.volume };

    default:
      return state;
  }
};

export default doorbellReducer;
