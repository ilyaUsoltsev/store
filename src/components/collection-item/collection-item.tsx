import React from "react";
import { ICollectionItem } from "../../models/collections";
import "./collection-item.scss";

function CollectionItem({ id, name, price, imageUrl }: ICollectionItem) {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
