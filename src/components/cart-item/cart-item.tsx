import React from "react";
import { ICollectionItem } from "../../models/collections";
import "./cart-item.scss";

interface ICartItemProps {
  item: ICollectionItem;
}

function CartItem({ item }: ICartItemProps) {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
}

export default CartItem;
