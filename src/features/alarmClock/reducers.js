import { types } from "./types.js";

function getIndex(state, action) {
  return state.findIndex((alarm) => alarm.title === action.payload.alarmTitle);
}

function toggleAlarmSwitch(state, action) {
  const stateCopy = [...state];
  const index = getIndex(state, action);
  if (index === -1) return stateCopy;

  stateCopy[index].set = action.payload.switchedOn;
  return stateCopy;
}

export const initialState = [
  {
    title: "Wake Me",
    time: "05:00",
    set: false,
  },
  {
    title: "Sleep",
    time: "22:00",
    set: false,
  },
];

const alarmClockReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ALARMCLOCK_SETALARMON:
      return toggleAlarmSwitch(state, action);

    default:
      return state;
  }
};

export default alarmClockReducer;
