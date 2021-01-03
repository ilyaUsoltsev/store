import { Dispatch } from "react";
import {
  convertCollectionSnapshopToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { ICollection } from "./../../models/collections";
import {
  CollectionActionTypes,
  FETCH_COLLECTION_SUCCESS,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_FAILURE,
} from "./action-types";

export const updateCollection = (
  collection: ICollection[]
): CollectionActionTypes => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionsStart = (): CollectionActionTypes => ({
  type: FETCH_COLLECTION_START,
});

export const fetchCollectionsFailure = (
  message: string
): CollectionActionTypes => ({
  type: FETCH_COLLECTION_FAILURE,
  payload: message,
});

export const fetchCollectionsSuccess = (
  collection: ICollection[]
): CollectionActionTypes => ({
  type: FETCH_COLLECTION_SUCCESS,
  payload: collection,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch: Dispatch<CollectionActionTypes>) => {
    dispatch(fetchCollectionsStart());
    const collectionRef = firestore.collection("collections");
    collectionRef
      .get()
      .then(async (snapshot) => {
        const collectionsMap = convertCollectionSnapshopToMap(
          snapshot
        ) as ICollection[];
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((err) => dispatch(fetchCollectionsFailure(err.message)));
  };
};
