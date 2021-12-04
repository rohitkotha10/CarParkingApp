import React from 'react'

import UserDrawer from './UserDrawer'
import Booking from './Booking'
import Orders from './Orders'
import ProfileInfo from './ProfileInfo'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function UserDash() {

  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <Router>
    <div> Welcome {email}! you are {type} </div>
      <div>
        <UserDrawer />
      </div>

      <Switch>

        <Route exact path="/User/">
          <Orders />
        </Route>

        <Route exact path="/User/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/User/orders">
          <Orders />
        </Route>

        <Route exact path="/User/booking">
          <Booking />
        </Route>

      </Switch>
    </Router>
  );
}
