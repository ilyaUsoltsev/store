import React from "react";
import "./collection.scss";
import { RouteComponentProps } from "react-router";
import { IRootState } from "../../redux/root-reducer";
import { selectCollection } from "../../redux/collection/collection.selector";
import { connect } from "react-redux";
import { ICollection } from "../../models/collections";
import CollectionItem from "../../components/collection-item/collection-item";

interface MatchParams {
  collectionId: string;
}
interface ICollectionPage extends RouteComponentProps<MatchParams> {
  collection?: ICollection;
}

const CollectionPage = ({ collection }: ICollectionPage) => {
  console.log(collection, "collectionfa1!!!");
  return (
    <div className="collection-page">
      <h2 className="title">{collection?.title}</h2>
      <div className="items">
        {collection!.items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRootState, ownProps: ICollectionPage) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
