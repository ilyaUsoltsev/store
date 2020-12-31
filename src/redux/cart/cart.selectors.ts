import { ICartState } from "./../../models/state";
import { IRootState } from "./../root-reducer";
import { createSelector } from "reselect";

const selectCart = (state: IRootState): ICartState => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart: ICartState) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCart],
  (cart: ICartState) =>
    cart.cartItems.reduce((acc, cur) => {
      return acc + cur.quantity!!;
    }, 0)
);
