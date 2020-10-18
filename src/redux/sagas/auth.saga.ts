import { put, call, takeLatest, all } from "redux-saga/effects";
import { Container } from "typedi";

import { AuthTypes } from "../types";
import { AuthService } from "../../services";
import { SagaIterator } from "redux-saga";
import { IUserDTO } from "../../interfaces/IUser";

export function* login(action: { type: string; payload: any }) {
  // API login request (email: action.email, password: action.password)
  const authService = Container.get(AuthService);
  const userData: IUserDTO = action.payload;
  try {
    const user = yield call(authService.login, userData);
    yield put({ type: AuthTypes.LOGIN_SUCCESS, user: user.data });
  } catch (error) {
    console.error("Auth login Error", [error.response]);
    yield put({ type: AuthTypes.LOGIN_ERROR, error: error.response.data });
  }
}

export function* register(action: { type: string; payload: any }) {
  // API login request (email: action.email, password: action.password)
  const authService = Container.get(AuthService);
  const userData: IUserDTO = action.payload;
  try {
    const user = yield call(authService.register, userData);
    yield put({ type: AuthTypes.REGISTER_SUCCESS, user: user.data });
  } catch (error) {
    console.error("Auth register Error", [error.response]);
    yield put({ type: AuthTypes.REGISTER_ERROR, error: error.response.data });
  }
}

export function* logout() {
  try {
    // API logout request
    yield put({ type: AuthTypes.LOGOUT_SUCCESS });
  } catch (error) {
    yield put({ type: AuthTypes.LOGOUT_ERROR, error });
  }
}

export default function* authSaga(): SagaIterator {
  yield all([
    takeLatest(AuthTypes.LOGIN_REQUEST, login),
    takeLatest(AuthTypes.REGISTER_REQUEST, register),
    takeLatest(AuthTypes.LOGOUT, logout),
  ]);
}
