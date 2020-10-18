import { combineReducers, Reducer } from "redux";

import AuthReducer from "./auth.reducer";

import { IAuthStoreState } from "../interfaces/IAuth";

export interface IStoreState {
  authStore: IAuthStoreState;
}

type ReducerMaps = { [K in keyof IStoreState]: Reducer<any> };

const allReducers: ReducerMaps = {
  authStore: AuthReducer,
};

const rootReducer = combineReducers({ ...allReducers });

export default rootReducer;
