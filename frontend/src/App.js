import './App.css';

import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import LoginPage from './auth/LoginPage'
import RegisterPage from './auth/RegisterPage';
import VerificationPage from './auth/VerificationPage';
import AdminDash from './admin/AdminDash'
import UserDash from './user/UserDash'
import WorkerDash from './worker/WorkerDash';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>

          <Route exact path="/register">
            <RegisterPage />
          </Route>

          <Route exact path="/verify">
            <VerificationPage />
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
