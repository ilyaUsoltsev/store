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
