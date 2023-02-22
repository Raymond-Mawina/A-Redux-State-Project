import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import lightingReducer from "./features/lighting/reducers.js";
import alarmClockReducer from "./features/alarmClock/reducers.js";
import garageDoorReducer from "./features/garageDoor/reducers.js";
import discoballReducer from "./features/discoBall/reducers.js";
import doorbellReducer from "./features/doorBell/reducers.js";
import musicplayerReducer from "./features/musicPlayer/reducers.js";

const reducer = combineReducers({
  lighting: lightingReducer,
  alarmClock: alarmClockReducer,
  garageDoor: garageDoorReducer,
  discoball: discoballReducer,
  doorbell: doorbellReducer,
  musicPlayer: musicplayerReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk.default));
