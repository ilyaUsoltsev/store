import React from "react";
import CustomButton from "../custom-button/custom-button";
import "./cart-dropdown.scss";

function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <CustomButton>CHECKOUT</CustomButton>
      </div>
    </div>
  );
}

export default CartDropdown;
