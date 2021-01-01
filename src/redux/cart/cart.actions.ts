import { ICollectionItem } from "../../models/collections";
import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  CartActionTypes,
  CLEAR_ITEM_FROM_CART,
} from "./action-types";

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN,
});
export const addCartItem = (cartItem: ICollectionItem): CartActionTypes => ({
  type: ADD_CART_ITEM,
  payload: cartItem,
});
export const removeCartItem = (cartItem: ICollectionItem): CartActionTypes => ({
  type: REMOVE_CART_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (
  cartItem: ICollectionItem
): CartActionTypes => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});
