import React, { Dispatch } from "react";
import { Route } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { fetchCollectionsStart } from "../../redux/collection/collection.actions";
import { CollectionActionTypes } from "../../redux/collection/action-types";

interface IShopPageProps extends RouteComponentProps {
  fetchCollectionsStart: () => {};
  isFetching: boolean;
  isCollectionsLoaded: boolean;
}

class ShopPage extends React.Component<IShopPageProps> {
  componentDidMount() {
    this.props.fetchCollectionsStart();
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

const mapDispatchToProps = (dispatch: Dispatch<CollectionActionTypes>) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect<any>(null, mapDispatchToProps as any)(ShopPage);
