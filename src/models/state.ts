import { ICollection } from "./collections";
import { ISection } from "./section";

export interface IStateDirectory {
  sections: ISection[];
}
export interface IStateShopPage {
  collections: ICollection[];
}

export interface ISignInState {
  email: string;
  password: string;
}

export interface IAppState {
  currentUser: ICurrentUser | null;
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
