import React, { Dispatch } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { RouteComponentProps } from "react-router";
import CollectionPage from "../collection/collection";
import {
  convertCollectionSnapshopToMap,
  firestore,
} from "../../firebase/firebase.utils";
import { CollectionActionTypes } from "../../redux/collection/action-types";
import { updateCollection } from "../../redux/collection/collection.actions";
import { ICollection } from "../../models/collections";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner";

interface IShopPageProps extends RouteComponentProps {
  updateCollection: (collection: ICollection[]) => {};
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component<IShopPageProps> {
  state = {
    loading: true,
  };

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshopToMap(
        snapshot
      ) as ICollection[];
      this.props.updateCollection(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    console.log(this.props, "thispropss!");
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch<CollectionActionTypes>) => ({
  updateCollection: (collection: ICollection[]) =>
    dispatch(updateCollection(collection)),
});

export default connect<any>(null, mapDispatchToProps as any)(ShopPage);
