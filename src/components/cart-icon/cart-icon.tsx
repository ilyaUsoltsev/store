import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartActionTypes } from "../../redux/cart/action-types";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.scss";

interface ICartIconProps {
  toggleCartHidden?: () => {};
}

function CartIcon({ toggleCartHidden }: ICartIconProps) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect<any>(null, mapDispatchToProps)(CartIcon);
