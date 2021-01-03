import { IUserState } from "./../../models/state";
import { createSelector } from "reselect";
import { IRootState } from "../root-reducer";

const selectUser = (state: IRootState): IUserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: IUserState) => user.currentUser
);
