import { types } from "./types.js";

export const openGarageDoor = (opened) => ({
  type: types.GARAGEDOOR_OPEN,
  payload: {
    opened: opened,
  },
});
