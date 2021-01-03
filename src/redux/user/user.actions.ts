import {
  SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  GOOGLE_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  UserActionTypes,
  CHECK_USER_SESSION,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
} from "./action-types";
import { ICurrentUser } from "./../../models/state";
import { IEmailAndPassword } from "../../models/auth";

export const googleSignInStart = (): UserActionTypes => ({
  type: GOOGLE_SIGN_IN_START,
});
export const checkUserSession = (): UserActionTypes => ({
  type: CHECK_USER_SESSION,
});
export const signInSuccess = (user: ICurrentUser): UserActionTypes => ({
  type: SIGN_IN_SUCCESS,
  payload: user,
});
export const signInFailure = (message: string): UserActionTypes => ({
  type: SIGN_IN_FAILURE,
  payload: message,
});

export const emailSignInStart = (
  emailAndPassword: IEmailAndPassword
): UserActionTypes => ({
  type: EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const singOutStart = (): UserActionTypes => ({
  type: SIGN_OUT_START,
});
export const singOutSuccess = (): UserActionTypes => ({
  type: SIGN_OUT_SUCCESS,
});
export const signOutFailure = (message: string): UserActionTypes => ({
  type: SIGN_OUT_FAILURE,
  payload: message,
});

export const singUpStart = (
  emailAndPassword: IEmailAndPassword
): UserActionTypes => ({
  type: SIGN_UP_START,
  payload: emailAndPassword,
});
export const singUpSuccess = (): UserActionTypes => ({
  type: SIGN_UP_SUCCESS,
});
export const signUpFailure = (message: string): UserActionTypes => ({
  type: SIGN_UP_FAILURE,
  payload: message,
});
