import { store } from "./store.js";
import { partyMode } from "./thunks/partyMode.js";
import { switchOffAll } from "./thunks/switchOffAll.js";
import { switchOnAll } from "./thunks/switchOnAll.js";

console.log(
  "------------------------------------------------ State After PartyMode Thunk is dispatched --------------------------------------------------"
);
store.dispatch(partyMode());
console.log(store.getState());
console.log(
  "-------------------------------------------------State After SwitchOffAll Thunk is dispatched -----------------------------------------------"
);
store.dispatch(switchOffAll());
console.log(store.getState());
console.log(
  "-------------------------------------------------State After SwitchOnAll Thunk is dispatched ------------------------------------------------"
);
store.dispatch(switchOnAll());
console.log(store.getState());
console.log(
  "---------------------------------------------------------------------------------------------------------------------------------------------"
);
