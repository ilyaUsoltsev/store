import React, { Dispatch } from "react";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { CollectionActionTypes } from "../../redux/collection/action-types";
import { fetchCollectionsStartAsync } from "../../redux/collection/collection.actions";
import { connect } from "react-redux";
import { ThunkAction } from "redux-thunk";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

interface IShopPageProps extends RouteComponentProps {
  fetchCollectionsAsync: () => {};
  isFetching: boolean;
  isCollectionsLoaded: boolean;
}

class ShopPage extends React.Component<IShopPageProps> {
  componentDidMount() {
    this.props.fetchCollectionsAsync();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (
  dispatch: Dispatch<ThunkAction<void, CollectionActionTypes, void, any>>
) => ({
  fetchCollectionsAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect<any>(null, mapDispatchToProps as any)(ShopPage);
