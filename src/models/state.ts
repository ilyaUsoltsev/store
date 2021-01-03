import { ICollection, ICollectionItem } from "./collections";
import { ISection } from "./section";

export interface IStateDirectory {
  sections: ISection[];
}
export interface IStateShopPage {
  collections: { [x: string]: ICollection } | null;
  isFetching: boolean;
  errorMessage?: string;
}

export interface ISignInState {
  email: string;
  password: string;
}

export interface IUserState {
  currentUser: ICurrentUser | null;
  error?: string;
}
export interface ICartState {
  hidden: boolean;
  cartItems: ICollectionItem[];
}

export interface ICurrentUser {
  id: any;
  createdAt: { seconds: number; nanoseconds: number };
  email: string;
  displayName: string;
}

export interface ISignUpState {
  email: string;
  password: string;
  displayName: string;
  confirmPassword: string;
}
