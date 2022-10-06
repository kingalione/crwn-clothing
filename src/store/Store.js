import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./RootReducer";

const loggerMiddleware = (store) => (next) => (action) => {
  if(!action.type) {
    return next(action);
  }

  console.log('type', action.type);
  console.log('payload', action.payload);
  console.log('currentState: ', store.getState());

  next(action);

  console.log('next state: ', store.getState());
}

// root-reducer
const middleWares = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});
