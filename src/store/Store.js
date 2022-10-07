import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
//import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "./RootSaga";

import logger from "redux-logger";

import { rootReducer } from "./RootReducer";

const sagaMiddleware = createSagaMiddleware();

// root-reducer
const middleWares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware,
].filter(Boolean);

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: middleWares,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
