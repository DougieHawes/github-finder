import React, { useEffect } from "react";

import Repos from "./Repos";

const User = ({ user, getUser, getUserRepos, repos, match }) => {
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  return (
    <div className="single-user">
      <div className="lead-box">
        <div className="img-box">
          <img className="single-user-image" src={avatar_url} alt="" />
          <div className="img-details-box">
            <p className="single-user-login">{login}</p>
            <p className="single-user-location">{location}</p>
          </div>
        </div>
        <div className="details-box">
          <h2 className="single-user-name">{name}</h2>
          <p className="single-user-bio">{bio}</p>
          <p className="single-user-blog">{blog}</p>
          <p className="single-user-html">{html_url}</p>
          {followers > 0 && (
            <p className="single-user-followers">Followers: {followers}</p>
          )}
          {following > 0 && (
            <p className="single-user-following">Following: {following}</p>
          )}
          {public_repos > 0 && (
            <p className="single-user-repos">Public Repos: {public_repos}</p>
          )}
          {public_gists > 0 && (
            <p className="single-user-gists">Public Gists: {public_gists}</p>
          )}
          <p className="single-user-hireable">
            Hireable: {hireable ? "true" : "false"}
          </p>
        </div>
      </div>
      <h3 className="repo-title">Repositories</h3>
      <div className="repos">
        <Repos repos={repos} />
      </div>
    </div>
  );
};

export default User;
