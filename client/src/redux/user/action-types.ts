import { IEmailAndPassword } from "../../models/auth";
import { ICurrentUser } from "./../../models/state";
export const CHECK_USER_SESSION = "CHECK_USER_SESSION";
export const GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START";
export const SIGN_OUT_START = "SIGN_OUT_START";
export const SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS";
export const SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

interface CheckUserSession {
  type: typeof CHECK_USER_SESSION;
}
interface SignOutStart {
  type: typeof SIGN_OUT_START;
}
interface SignOutSuccess {
  type: typeof SIGN_OUT_SUCCESS;
}
interface SignOutFailure {
  type: typeof SIGN_OUT_FAILURE;
  payload: string;
}
export interface SignUpStartActionType {
  type: typeof SIGN_UP_START;
  payload: IEmailAndPassword;
}
interface SignUpSuccess {
  type: typeof SIGN_UP_SUCCESS;
}
interface SignUpFailure {
  type: typeof SIGN_UP_FAILURE;
  payload: string;
}
interface GoogleSingInStart {
  type: typeof GOOGLE_SIGN_IN_START;
}
interface GoogleSingInSuccess {
  type: typeof SIGN_IN_SUCCESS;
  payload: ICurrentUser;
}
interface GoogleSingInFailure {
  type: typeof SIGN_IN_FAILURE;
  payload: string;
}

export interface EmailSingInStartAction {
  type: typeof EMAIL_SIGN_IN_START;
  payload: IEmailAndPassword;
}

export type UserActionTypes =
  | SignUpFailure
  | SignUpSuccess
  | SignUpStartActionType
  | SignOutFailure
  | SignOutSuccess
  | SignOutStart
  | CheckUserSession
  | GoogleSingInSuccess
  | GoogleSingInStart
  | GoogleSingInFailure
  | EmailSingInStartAction;
