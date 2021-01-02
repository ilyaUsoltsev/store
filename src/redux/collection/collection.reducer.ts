import { IStateShopPage } from "./../../models/state";
import { UPDATE_COLLECTIONS } from "./action-types";

const INITIAL_STATE: IStateShopPage = {
  collections: null,
};

const collectionReducer = (
  state: IStateShopPage = INITIAL_STATE,
  action: any
): IStateShopPage => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload };
    default:
      return state;
  }
};

export default collectionReducer;
