import { IStateShopPage } from "./../../models/state";
import { createSelector } from "reselect";
import { IRootState } from "../root-reducer";

const selectShopCollection = (state: IRootState): IStateShopPage =>
  state.collection;

export const selectCollections = createSelector(
  [selectShopCollection],
  ({ collections }: IStateShopPage) =>
    collections ? Object.values(collections!) : []
);

export const selectCollection = (collectionUrlParam: string) => {
  return createSelector(
    [selectShopCollection],
    ({ collections }: IStateShopPage) =>
      collections ? collections![collectionUrlParam] : undefined
  );
};
