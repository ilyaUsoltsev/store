import React from "react";
import sections from "../../directory.data";
import { IState } from "../../models/state";
import MenuItem from "../menu-item/menu-item";
import "./directory.scss";

interface IProps {}

class Directory extends React.Component {
  state: IState;
  constructor(props: IProps) {
    super(props);
    this.state = {
      sections: sections,
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => {
          return <MenuItem key={id} {...otherSectionProps} />;
        })}
      </div>
    );
  }
}

export default Directory;
