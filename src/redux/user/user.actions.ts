import { SET_CURRENT_USER, UserActionTypes } from "./action-types";
import { ICurrentUser } from "./../../models/state";

export const setCurrentUser = (user: ICurrentUser): UserActionTypes => ({
  type: SET_CURRENT_USER,
  payload: user,
});
