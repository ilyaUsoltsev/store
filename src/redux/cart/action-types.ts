import { ICollectionItem } from "../../models/collections";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const CLEAR_ITEM_FROM_CART = "CLEAR_ITEM_FROM_CART";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";

interface ClearCart {
  type: typeof CLEAR_CART;
}
interface SetCartState {
  type: typeof TOGGLE_CART_HIDDEN;
}
interface AddCartItem {
  type: typeof ADD_CART_ITEM;
  payload: ICollectionItem;
}

interface ClearItemFromCart {
  type: typeof CLEAR_ITEM_FROM_CART;
  payload: ICollectionItem;
}
interface RemoveItem {
  type: typeof REMOVE_CART_ITEM;
  payload: ICollectionItem;
}

export type CartActionTypes =
  | SetCartState
  | AddCartItem
  | ClearItemFromCart
  | RemoveItem
  | ClearCart;
