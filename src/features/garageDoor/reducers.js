import { types } from "./types.js";

export const initialState = {
  opened: false,
};

const alarmClockReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GARAGEDOOR_OPEN:
      return { ...state, opened: action.payload.opened };

    default:
      return state;
  }
};

export default alarmClockReducer;
