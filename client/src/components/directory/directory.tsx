import React from "react";
import { connect } from "react-redux";
import { ISection } from "../../models/section";
import { selectDirectory } from "../../redux/directory/directory.selector";
import { IRootState } from "../../redux/root-reducer";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

interface IDirectoryProps {
  sections: ISection[];
}

const Directory = ({ sections }: IDirectoryProps) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  sections: selectDirectory(state),
});

export default connect(mapStateToProps)(Directory);
