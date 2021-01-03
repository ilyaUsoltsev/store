import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ICollectionItem } from "../../models/collections";
import { CartActionTypes } from "../../redux/cart/action-types";
import {
  addCartItem,
  clearItemFromCart,
  removeCartItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.scss";

interface ICheckoutItemProps {
  cartItem: ICollectionItem;
  clearFromCart?: (item: ICollectionItem) => {};
  removeItem?: (item: ICollectionItem) => {};
  addItem?: (item: ICollectionItem) => {};
}

function CheckoutItem({
  cartItem,
  clearFromCart,
  removeItem,
  addItem,
}: ICheckoutItemProps) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={cartItem.imageUrl} alt="item" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem!(cartItem)}>
          &#10094;
        </div>
        <span className="value">{cartItem.quantity}</span>
        <div className="arrow" onClick={() => addItem!(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button" onClick={() => clearFromCart!(cartItem)}>
        &#10005;
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  clearFromCart: (item: ICollectionItem) => dispatch(clearItemFromCart(item)),
  removeItem: (item: ICollectionItem) => dispatch(removeCartItem(item)),
  addItem: (item: ICollectionItem) => dispatch(addCartItem(item)),
});

export default connect<any>(null, mapDispatchToProps)(CheckoutItem);
