import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import { Switch, Route } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import AuthPage from "./pages/authpage/authpage";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { IAppState } from "./models/state";

interface IAppProps {}

class App extends React.Component {
  state: IAppState;
  unsubscribeFromAuth: any;

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      currentUser: {
        id: null,
        createdAt: { seconds: 0, nanoseconds: 0 },
        displayName: "",
        email: "",
      },
    };
  }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef?.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                ...snapshot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          signOut={() => auth.signOut()}
        />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
