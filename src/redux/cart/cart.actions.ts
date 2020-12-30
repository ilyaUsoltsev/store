import { TOGGLE_CART_HIDDEN, CartActionTypes } from "./action-types";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});
