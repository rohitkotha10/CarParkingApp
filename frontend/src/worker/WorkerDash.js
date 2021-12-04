import React from 'react'

import WorkerDrawer from './WorkerDrawer';
import ProfileInfo from './ProfileInfo';
import Orders from './Orders';

import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function WorkerDash() {

  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <Router>
    <div> Welcome {email}! you are {type} </div>
      <div>
        <WorkerDrawer />
      </div>

      <Switch>

        <Route exact path="/Worker/">
          <Orders />
        </Route>

        <Route exact path="/Worker/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/Worker/orders">
          <Orders />
        </Route>

      </Switch>
    </Router>
  );
}
