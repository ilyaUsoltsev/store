import { connect } from "react-redux";
import { selectIsCollectionLoaded } from "../../redux/collection/collection.selector";
import { IRootState } from "../../redux/root-reducer";
import { compose } from "redux";
import CollectionPage from "./collection";
import WithSpinner from "../../components/with-spinner/with-spinner";

const mapStateToProps = (state: IRootState) => ({
  isLoading: !selectIsCollectionLoaded(state),
});
const CollectionPageContainer: any = compose(
  connect<any>(mapStateToProps as any),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
