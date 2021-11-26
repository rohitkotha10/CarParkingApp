import React from 'react'

import WorkerDrawer from '../worker/WorkerDrawer';
import Dash from '../worker/Dash';
import ProfileInfo from '../worker/ProfileInfo';
import Feedback from '../worker/Feedback';
import Orders from '../worker/Orders';

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
          <Dash />
        </Route>

        <Route exact path="/Worker/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/Worker/orders">
          <Orders />
        </Route>

        <Route exact path="/Worker/feedback">
          <Feedback />
        </Route>

      </Switch>
    </Router>
  );
}
