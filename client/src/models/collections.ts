export interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: ICollectionItem[];
}

export interface ICollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  quantity?: number;
}
