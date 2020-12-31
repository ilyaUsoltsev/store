import {
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
} from "./action-types";
import { ICartState } from "./../../models/state";
import { addItemToCart } from "./cart.utils";

const INITIAL_STATE: ICartState = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (
  state: ICartState = INITIAL_STATE,
  action: CartActionTypes
): ICartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
