import { IStateShopPage } from "./../../models/state";
import { createSelector } from "reselect";
import { IRootState } from "../root-reducer";

const selectShopCollection = (state: IRootState): IStateShopPage =>
  state.collection;

const COLLECTION_ID_MAP: { [key: string]: number } = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

export const selectCollections = createSelector(
  [selectShopCollection],
  (shop: IStateShopPage) => shop.collections
);

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector([selectShopCollection], (shop: IStateShopPage) =>
    shop.collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  );
};
