import { SIGN_OUT_SUCCESS } from "./../user/action-types";
import { takeLatest, call, put, all } from "redux-saga/effects";
import { clearCartAction } from "./cart.actions";

export function* clearCartOnSignOutSaga() {
  yield put(clearCartAction());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOutSaga);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
