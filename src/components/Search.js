import React, { useState } from "react";

import { Zoom } from "react-reveal";

import Error from "./Error";

const Search = ({ searchUsers, showClear, clearUsers }) => {
  const [text, setText] = useState("");
  const [error, showError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!(text.length > 0)) {
      showError(true);
    } else {
      searchUsers(text);
      setText("");
    }
  };

  const toggleError = () => showError(!error);

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search">
      <form onSubmit={onSubmit} className="form">
        <input
          className="input"
          type="text"
          name="text"
          value={text}
          placeholder="search users"
          onChange={onChange}
        />
        <button className="button" type="submit">
          SEARCH
        </button>
      </form>
      {showClear && (
        <Zoom duration={700}>
          <button className="clear-button" onClick={clearUsers}>
            CLEAR
          </button>
        </Zoom>
      )}
      {error && <Error close={toggleError} />}
    </div>
  );
};

export default Search;
