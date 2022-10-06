import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./RootReducer";

// root-reducer
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
  devTools: true
});

export const persistor = persistStore(store);
