import { ICollection } from "../../models/collections";
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";

interface UpdateCollection {
  type: typeof UPDATE_COLLECTIONS;
  payload: ICollection[];
}

export type CollectionActionTypes = UpdateCollection;
