import { createStore } from "redux";
import { combineReducers } from "redux";

import { roomReducer } from "./reducers/roomReducer";

export const Reducers = combineReducers({
  room: roomReducer,
});

export const store = createStore(Reducers);
