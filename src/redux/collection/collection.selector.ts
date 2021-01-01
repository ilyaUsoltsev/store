import { IStateShopPage } from "./../../models/state";
import { createSelector } from "reselect";
import { IRootState } from "../root-reducer";

const selectShopCollection = (state: IRootState): IStateShopPage =>
  state.collection;

export const selectCollections = createSelector(
  [selectShopCollection],
  (shop: IStateShopPage) => Object.values(shop.collections)
);

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector(
    [selectShopCollection],
    (shop: IStateShopPage) => shop.collections[collectionUrlParam]
  );
};
