import { CartActionTypes, TOGGLE_CART_HIDDEN } from "./action-types";
import { ICartState } from "./../../models/state";

const INITIAL_STATE: ICartState = {
  hidden: true,
};

const cartReducer = (
  state: ICartState = INITIAL_STATE,
  action: CartActionTypes
): ICartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };

    default:
      return state;
  }
};

export default cartReducer;
