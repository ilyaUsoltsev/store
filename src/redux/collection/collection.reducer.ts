import SHOP_DATA from "../../shop.data";
import { IStateShopPage } from "./../../models/state";

const INITIAL_STATE: IStateShopPage = {
  collections: SHOP_DATA,
};

const collectionReducer = (
  state: IStateShopPage = INITIAL_STATE,
  action: any
): IStateShopPage => {
  switch (action.type) {
    default:
      return state;
  }
};

export default collectionReducer;
