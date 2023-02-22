import { types } from "./types.js";

export const initialState = {
  switchedOn: false,
};

const discoballReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DISCOBALL_SWITCHON:
      return { ...state, switchedOn: action.payload.switchedOn };

    default:
      return state;
  }
};

export default discoballReducer;
