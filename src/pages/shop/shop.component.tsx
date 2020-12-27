import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection/preview-collection";
import { IStateShopPage } from "../../models/state";
import SHOP_DATA from "../../shop.data";
interface IProps {}

export default class ShopPage extends Component {
  state: IStateShopPage;
  constructor(props: IProps) {
    super(props);
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => {
          return <CollectionPreview key={id} {...otherCollectionProps} />;
        })}
      </div>
    );
  }
}
