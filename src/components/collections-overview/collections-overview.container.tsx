import { connect } from "react-redux";
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import { selectIsCollectionFetching } from "../../redux/collection/collection.selector";
import { IRootState } from "../../redux/root-reducer";
import WithSpinner from "../with-spinner/with-spinner";
import { compose } from "redux";

const mapStateToProps = (state: IRootState) => ({
  isLoading: selectIsCollectionFetching(state),
});
const CollectionOverviewContainer: any = compose(
  connect<any>(mapStateToProps as any),
  WithSpinner
)(CollectionsOverview);

export default CollectionOverviewContainer;
