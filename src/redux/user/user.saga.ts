import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUserAsPromise,
  googleProvider,
} from "../../firebase/firebase.utils";
import {
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  EmailSingInStartAction,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_UP_START,
  SignUpStartActionType,
} from "./action-types";
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signUpFailure,
  singOutSuccess,
} from "./user.actions";

export function* getSnapshotFromUserAuth(user: any) {
  try {
    const userRef = yield createUserProfileDocument(user);
    const userSnapshot = yield userRef.get();
    yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* signInWithGoogleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onGoogleSignInStartSaga() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogleSaga);
}

export function* signInWithEmailSaga({
  payload: { email, password },
}: EmailSingInStartAction) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onEmailSignInStartSaga() {
  yield takeLatest<EmailSingInStartAction>(
    EMAIL_SIGN_IN_START,
    signInWithEmailSaga
  );
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUserAsPromise();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error.message));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutSaga() {
  try {
    yield auth.signOut();
    yield put(singOutSuccess());
  } catch (error) {
    put(signOutFailure(error.message));
  }
}

export function* signUpSaga(data: SignUpStartActionType) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(
      data.payload.email,
      data.payload.password
    );
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    put(signUpFailure(error.message));
  }
}

export function* onSignOutStartSaga() {
  yield takeLatest(SIGN_OUT_START, signOutSaga);
}

export function* onSignUpStartSaga() {
  yield takeLatest<SignUpStartActionType>(SIGN_UP_START, signUpSaga);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStartSaga),
    call(onEmailSignInStartSaga),
    call(onCheckUserSession),
    call(onSignOutStartSaga),
    call(onSignUpStartSaga),
  ]);
}
