import { ICollection } from "./../../models/collections";
import { CollectionActionTypes, UPDATE_COLLECTIONS } from "./action-types";

export const updateCollection = (
  collection: ICollection[]
): CollectionActionTypes => ({
  type: UPDATE_COLLECTIONS,
  payload: collection,
});
