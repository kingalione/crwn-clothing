import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./RootReducer";

// root-reducer
const middleWares = [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});
