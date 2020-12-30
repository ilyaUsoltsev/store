import { ICurrentUser } from "./../../models/state";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

interface SetCurrentUser {
  type: typeof SET_CURRENT_USER;
  payload: ICurrentUser;
}

export type UserActionTypes = SetCurrentUser;
