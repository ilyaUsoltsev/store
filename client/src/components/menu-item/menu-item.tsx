import React from "react";
import "./menu-item.scss";
import { withRouter } from "react-router-dom";
import { RouteComponentProps } from "react-router";

interface IMenuItemRouterProps {
  title: string; // This one is coming from the router
}

interface IMenuItemProps extends RouteComponentProps<IMenuItemRouterProps> {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

function MenuItem({
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match,
}: IMenuItemProps) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
