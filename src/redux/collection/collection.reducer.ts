import { IStateShopPage } from "./../../models/state";
import {
  FETCH_COLLECTION_FAILURE,
  FETCH_COLLECTION_START,
  FETCH_COLLECTION_SUCCESS,
} from "./action-types";

const INITIAL_STATE: IStateShopPage = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const collectionReducer = (
  state: IStateShopPage = INITIAL_STATE,
  action: any
): IStateShopPage => {
  switch (action.type) {
    case FETCH_COLLECTION_START:
      return { ...state, isFetching: true };

    case FETCH_COLLECTION_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };

    case FETCH_COLLECTION_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default collectionReducer;
