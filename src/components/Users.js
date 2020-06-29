import React from "react";

import { Zoom } from "react-reveal";

import UserItem from "./UserItem";
import Loader from "./Loader";

const Users = ({ users, loading }) => (
  <div className="users">
    {loading ? (
      <Loader />
    ) : (
      users.map((user) => (
        <Zoom key={user.id} delay={700} duration={700}>
          <UserItem
            avatar_url={user.avatar_url}
            login={user.login}
            html_url={user.html_url}
          />
        </Zoom>
      ))
    )}
  </div>
);

export default Users;
