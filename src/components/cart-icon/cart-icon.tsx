import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartActionTypes } from "../../redux/cart/action-types";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { IRootState } from "../../redux/root-reducer";
import "./cart-icon.scss";

interface ICartIconProps {
  toggleCartHidden?: () => {};
  itemCount?: number;
}

function CartIcon({ toggleCartHidden, itemCount }: ICartIconProps) {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<CartActionTypes>) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect<any>(
  mapStateToProps as any,
  mapDispatchToProps
)(CartIcon);
