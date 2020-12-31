import { ICollectionItem } from "../../models/collections";

export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_CART_ITEM = "ADD_CART_ITEM";

interface SetCartState {
  type: typeof TOGGLE_CART_HIDDEN;
}
interface AddCartItem {
  type: typeof ADD_CART_ITEM;
  payload: ICollectionItem;
}

export type CartActionTypes = SetCartState | AddCartItem;
