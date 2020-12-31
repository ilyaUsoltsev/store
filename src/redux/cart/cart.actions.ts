import { ICollectionItem } from "../../models/collections";
import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  CartActionTypes,
} from "./action-types";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});
export const addCartItem = (cartItem: ICollectionItem): CartActionTypes => ({
  type: ADD_CART_ITEM,
  payload: cartItem,
});
