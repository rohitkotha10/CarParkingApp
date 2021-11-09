import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import LoginPage from './common/LoginPage'
import AdminDash from './common/AdminDash'
import UserDash from './common/UserDash'
import WorkerDash from './common/WorkerDash';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route exact path="/admin">
            <AdminDash />
          </Route>

          <Route exact path="/user">
            <UserDash />
          </Route>

          <Route exact path="/worker">
            <WorkerDash />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
