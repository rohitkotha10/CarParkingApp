import React from 'react'

import UserDrawer from '../user/UserDrawer'
import Home from '../user/Home'
import Booking from '../user/Booking'
import PreviousOrders from '../user/PreviousOrders'
import ProfileInfo from '../user/ProfileInfo'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function UserDash() {
  return (
    <Router>
      <div>
        <UserDrawer />
      </div>

      <Switch>

        <Route exact path="/user/">
          <Home />
        </Route>

        <Route exact path="/user/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/user/previousorders">
          <PreviousOrders />
        </Route>

        <Route exact path="/user/booking">
          <Booking />
        </Route>

      </Switch>
    </Router>
  );
}
