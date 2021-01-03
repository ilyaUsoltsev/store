import {
  CartActionTypes,
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CLEAR_ITEM_FROM_CART,
  CLEAR_CART,
} from "./action-types";
import { ICartState } from "./../../models/state";
import { addItemToCart, removeCartItem } from "./cart.utils";

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
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: removeCartItem(state.cartItems, action.payload),
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
