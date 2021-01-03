import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  convertCollectionSnapshopToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { FETCH_COLLECTION_START } from "./action-types";
import {
  fetchCollectionsFailure,
  fetchCollectionsSuccess,
} from "./collection.actions";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshopToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(FETCH_COLLECTION_START, fetchCollectionsAsync);
}

export function* collectionSagas() {
  yield all([call(fetchCollectionsStart)]);
}
