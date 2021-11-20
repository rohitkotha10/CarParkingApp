import React from 'react'

import WorkerDrawer from '../worker/WorkerDrawer';
import Home from '../worker/Home';
import ProfileInfo from '../worker/ProfileInfo';
import Feedback from '../worker/Feedback';
import Orders from '../worker/Orders';

import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom"

export default function WorkerDash() {
  return (
    <Router>
      <div>
        <WorkerDrawer />
      </div>

      <Switch>

        <Route exact path="/worker/">
          <Home />
        </Route>

        <Route exact path="/worker/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/worker/orders">
          <Orders />
        </Route>

        <Route exact path="/worker/feedback">
          <Feedback />
        </Route>

      </Switch>
    </Router>
  );
}
