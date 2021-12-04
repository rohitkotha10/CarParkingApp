import React from 'react'

import UserDrawer from '../user/UserDrawer'
import Dash from '../user/Dash'
import Booking from '../user/Booking'
import PreviousOrders from '../user/PreviousOrders'
import ProfileInfo from '../user/ProfileInfo'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
import { Dashboard } from '@mui/icons-material'

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
          <Dash />
        </Route>

        <Route exact path="/User/profileinfo">
          <ProfileInfo />
        </Route>

        <Route exact path="/User/previousorders">
          <PreviousOrders />
        </Route>

        <Route exact path="/User/booking">
          <Booking />
        </Route>

      </Switch>
    </Router>
  );
}
