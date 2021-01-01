import { ICollectionItem } from "./../../models/collections";
export const addItemToCart = (
  cartItems: ICollectionItem[],
  itemToAdd: ICollectionItem
): ICollectionItem[] => {
  const existingItem = cartItems.find((item) => item.id === itemToAdd.id);
  if (existingItem) {
    return cartItems.map((item) => {
      return item.id === existingItem.id
        ? { ...item, quantity: item.quantity!! + 1 }
        : item;
    });
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

export const removeCartItem = (
  cartItems: ICollectionItem[],
  itemToRemove: ICollectionItem
): ICollectionItem[] => {
  const existingItem = cartItems.find((item) => item.id === itemToRemove.id);
  if (existingItem?.quantity === 1) {
    return cartItems.filter((item) => item.id !== existingItem.id);
  } else {
    return cartItems.map((item) => {
      return item.id === existingItem!.id
        ? { ...item, quantity: item.quantity! - 1 }
        : item;
    });
  }
};
