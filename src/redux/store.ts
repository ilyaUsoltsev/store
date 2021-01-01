import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persitor = persistStore(store);

const exportedStore = { store, persitor };

export default exportedStore;
