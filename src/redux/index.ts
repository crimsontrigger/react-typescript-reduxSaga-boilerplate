import { persistReducer, persistStore } from "redux-persist";

import ReduxPersist from "../config/reduxPersist.config";
import configureStore from "./configureStore";
import reducers from "./reducers";
import { rootSaga } from "./sagas";

// Redux Persist
const finalReducers = reducers;

const { store } = configureStore(finalReducers, rootSaga);

export { store };
