import React, { Dispatch } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { IRootState } from "../../redux/root-reducer";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { UserActionTypes } from "../../redux/user/action-types";
import { singOutStart } from "../../redux/user/user.actions";

interface IHeaderProps {
  currentUser?: any;
  hidden?: boolean;
  signOutStart?: () => {};
}

function Header({ currentUser, hidden, signOutStart }: IHeaderProps) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => signOutStart!()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden && <CartDropdown />}
    </HeaderContainer>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  signOutStart: () => dispatch(singOutStart()),
});

const mapStateToProps = (state: IRootState) => ({
  currentUser: selectCurrentUser(state),
  hidden: selectCartHidden(state),
});

export default connect<any>(mapStateToProps as any, mapDispatchToProps)(Header);
