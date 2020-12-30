import { UserActionTypes, SET_CURRENT_USER } from "./action-types";
import { IAppState } from "./../../models/state";

const INITIAL_STATE: IAppState = {
  currentUser: null,
};

const userReducer = (
  state: IAppState = INITIAL_STATE,
  action: UserActionTypes
): IAppState => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
