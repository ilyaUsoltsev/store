import React from "react";
import { connect } from "react-redux";
import { ICollection } from "../../models/collections";
import { selectCollections } from "../../redux/collection/collection.selector";
import { IRootState } from "../../redux/root-reducer";
import CollectionPreview from "../preview-collection/preview-collection";
import "./collections-overview.scss";
interface ICollectionsOverviewProps {
  collections: ICollection[];
}

function CollectionsOverview({ collections }: ICollectionsOverviewProps) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  collections: selectCollections(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
