import { IStateDirectory } from "./../../models/state";
import { createSelector } from "reselect";
import { IRootState } from "../root-reducer";

const selectDir = (state: IRootState): IStateDirectory => state.directory;

export const selectDirectory = createSelector(
  [selectDir],
  (dir: IStateDirectory) => dir.sections
);
