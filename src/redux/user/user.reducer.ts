import { UserActionTypes, SET_CURRENT_USER } from "./action-types";
import { IUserState } from "./../../models/state";

const INITIAL_STATE: IUserState = {
  currentUser: null,
};

const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
