import React from "react";

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <h3>
        <a href={repo.html_url} target="blank">
          {repo.name}
        </a>
      </h3>
    </div>
  );
};

export default RepoItem;
