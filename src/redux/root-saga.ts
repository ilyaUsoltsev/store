import { all, call } from "redux-saga/effects";
import { cartSagas } from "./cart/cart.saga";
import { collectionSagas } from "./collection/collection.saga";
import { userSagas } from "./user/user.saga";

export default function* rootSaga() {
  yield all([call(collectionSagas), call(userSagas), call(cartSagas)]);
}
