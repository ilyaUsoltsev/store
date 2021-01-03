import { ICollection } from "../../models/collections";
export const UPDATE_COLLECTIONS = "UPDATE_COLLECTIONS";
export const FETCH_COLLECTION_START = "FETCH_COLLECTION_START";
export const FETCH_COLLECTION_SUCCESS = "FETCH_COLLECTION_SUCCESS";
export const FETCH_COLLECTION_FAILURE = "FETCH_COLLECTION_FAILURE";
interface FetchCollectionsStart {
  type: typeof FETCH_COLLECTION_START;
}
interface FetchCollectionsFailure {
  type: typeof FETCH_COLLECTION_FAILURE;
  payload: string;
}
interface FetchCollectionsSuccess {
  type: typeof FETCH_COLLECTION_SUCCESS;
  payload: ICollection[];
}

export type CollectionActionTypes =
  | FetchCollectionsStart
  | FetchCollectionsSuccess
  | FetchCollectionsFailure;
