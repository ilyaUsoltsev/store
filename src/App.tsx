import React, { Dispatch, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import AuthPage from "./pages/authpage/authpage";
import { ICurrentUser } from "./models/state";
import { connect } from "react-redux";
import { IRootState } from "./redux/root-reducer";
import CheckoutPage from "./pages/checkout/checkout";
import { UserActionTypes } from "./redux/user/action-types";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

interface IAppProps {
  currentUser?: ICurrentUser | null;
  checkUserSession?: () => {};
}

const App = ({ currentUser, checkUserSession }: IAppProps) => {
  useEffect(() => {
    checkUserSession!();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

const mapStateToProps = (state: IRootState) => ({
  currentUser: selectCurrentUser(state),
});

export default connect<any, any>(
  mapStateToProps as any,
  mapDispatchToProps
)(App);
