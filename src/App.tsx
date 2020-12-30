import React, { Dispatch } from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import AuthPage from "./pages/authpage/authpage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { ICurrentUser } from "./models/state";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { UserActionTypes } from "./redux/user/action-types";

interface IAppProps {
  setCurrentUser?: (x: ICurrentUser | null) => {};
}

class App extends React.Component<IAppProps> {
  unsubscribeFromAuth: any;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapshot: any) => {
          setCurrentUser!!({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser!!(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header signOut={() => auth.signOut()} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  setCurrentUser: (user: ICurrentUser) => dispatch(setCurrentUser(user)),
});

export default connect<any, any, IAppProps>(null, mapDispatchToProps)(App);
