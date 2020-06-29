import React from "react";

import { Link } from "react-router-dom";

const UserItem = ({ id, avatar_url, login, html_url }) => (
  <div key={id} className="user-item">
    <img className="user-item-image" src={avatar_url} alt="" />
    <h3 className="user-item-name">{login}</h3>
    <button className="user-item-button">
      <a href={html_url} target="blank">
        VISIT PROFILE
      </a>
    </button>
    <Link to={`/user/${login}`}>
      <p className="user-item-link">MORE</p>
    </Link>
  </div>
);

export default UserItem;
