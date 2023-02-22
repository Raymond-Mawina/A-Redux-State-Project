import { types } from "./types.js";

export const setAlarmOn = (title, switchedOn) => ({
  type: types.ALARMCLOCK_SETALARMON,
  payload: {
    alarmTitle: title,
    switchedOn: switchedOn,
  },
});
