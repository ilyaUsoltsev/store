import {
  UserActionTypes,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_FAILURE,
  SIGN_OUT_SUCCESS,
} from "./action-types";
import { IUserState } from "./../../models/state";

const INITIAL_STATE: IUserState = {
  currentUser: null,
  error: undefined,
};

const userReducer = (
  state: IUserState = INITIAL_STATE,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, error: undefined };
    case SIGN_OUT_FAILURE:
    case SIGN_IN_FAILURE:
      return { ...state, error: action.payload };
    case SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, error: undefined };
    default:
      return state;
  }
};

export default userReducer;
