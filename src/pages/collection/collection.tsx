import React from "react";
import "./collection.scss";
import { RouteComponentProps } from "react-router";
import { IRootState } from "../../redux/root-reducer";
import { selectCollection } from "../../redux/collection/collection.selector";
import { connect } from "react-redux";
import { ICollection } from "../../models/collections";

interface MatchParams {
  collectionId: string;
}
interface ICollectionPage extends RouteComponentProps<MatchParams> {
  collection?: ICollection;
}

const CollectionPage = ({ collection }: ICollectionPage) => {
  return (
    <div className="collection-page">
      <h2>Collection Page {collection?.title}</h2>
    </div>
  );
};

const mapStateToProps = (state: IRootState, ownProps: ICollectionPage) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
