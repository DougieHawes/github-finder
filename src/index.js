import React, { useState } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import axios from "axios";

import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Landing from "./components/Landing";
import About from "./components/About";
import User from "./components/User";
import Users from "./components/Users";

import GithubState from "./context/github/GithubState";

import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [landing, toggleLanding] = useState(true);
  const [clear, showClear] = useState(false);

  const searchUsers = async (text) => {
    toggleLanding(true);
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    toggleLanding(false);
    setLoading(false);
    showClear(true);
    setUsers(res.data.items);
  };

  const getUser = async (username) => {
    toggleLanding(false);
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
    showClear(true);
  };

  const getUserRepos = async (username) => {
    toggleLanding(false);
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
    showClear(false);
  };

  const clearUsers = () => {
    setUsers([]);
    toggleLanding(true);
    showClear(false);
  };

  return (
    <GithubState>
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Search
                searchUsers={searchUsers}
                showClear={clear}
                clearUsers={clearUsers}
              />
              {landing ? (
                <Landing />
              ) : (
                <Users loading={loading} users={users} />
              )}
            </Route>
            <Route exact path="/about" component={About} />
            <Route
              exact
              path="/user/:login"
              render={(props) => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </Router>
    </GithubState>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
