import React from "react";
import { connect } from "react-redux";
import { ICollectionItem } from "../../models/collections";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { IRootState } from "../../redux/root-reducer";
import "./checkout.scss";

interface ICheckoutProps {
  cartItems: ICollectionItem[];
  totalValue: number;
}

function CheckoutPage({ cartItems, totalValue }: ICheckoutProps) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => cartItem.name)}
      <div className="total">
        <span>TOTAL: ${totalValue}</span>
      </div>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  cartItems: selectCartItems(state),
  totalValue: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
