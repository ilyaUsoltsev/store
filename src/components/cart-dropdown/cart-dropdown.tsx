import React from "react";
import { connect } from "react-redux";
import { ICollectionItem } from "../../models/collections";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { IRootState } from "../../redux/root-reducer";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { Dispatch } from "redux";
import { CartActionTypes } from "../../redux/cart/action-types";

interface ICartDropdownRouterProps {}
interface ICartDropdownProps
  extends RouteComponentProps<ICartDropdownRouterProps> {
  cartItems?: ICollectionItem[];
  dispatch?: Dispatch<CartActionTypes>;
}

function CartDropdown({ cartItems, history, dispatch }: ICartDropdownProps) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems!.length ? (
          cartItems!.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch!(toggleCartHidden());
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect<any>(mapStateToProps as any)(CartDropdown));
