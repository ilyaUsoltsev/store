import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ICollectionItem } from "../../models/collections";
import { CartActionTypes } from "../../redux/cart/action-types";
import { addCartItem } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button";
import "./collection-item.scss";

interface ICollectionItemProps {
  item: ICollectionItem;
  addCartItem?: (x: ICollectionItem) => {};
}

function CollectionItem({ item, addCartItem }: ICollectionItemProps) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{item.name}</span>
        <span className="price">{item.price}</span>
      </div>
      <CustomButton customClass="inverted" onClick={() => addCartItem!!(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  addCartItem: (item: any) => dispatch(addCartItem(item)),
});

export default connect<any>(null, mapDispatchToProps)(CollectionItem);
