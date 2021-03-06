import React from "react";
import { ICollectionItem } from "../../models/collections";
import CollectionItem from "../collection-item/collection-item";
import "./preview-collection.scss";
interface ICollectionPreviewProps {
  title: string;
  routeName: string;
  items: ICollectionItem[];
}

function CollectionPreview({ title, items }: ICollectionPreviewProps) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  );
}

export default CollectionPreview;
