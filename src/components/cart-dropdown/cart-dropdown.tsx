import React from "react";
import { connect } from "react-redux";
import { ICollectionItem } from "../../models/collections";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { IRootState } from "../../redux/root-reducer";
import CartItem from "../cart-item/cart-item";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

interface ICartDropdownProps {
  cartItems: ICollectionItem[];
}

function CartDropdown({ cartItems }: ICartDropdownProps) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
