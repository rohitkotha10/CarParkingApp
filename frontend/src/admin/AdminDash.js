import React from 'react'

import AdminDrawer from './AdminDrawer';
import AllUsers from './AllUsers'
import AllWorkers from './AllWorkers'
import Orders from './Orders'
import ParkingSpots from './ParkingSpots'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useLocation } from "react-router-dom";

export default function AdminDash() {

  const location = useLocation();
  const email = location.state.email;
  const type = location.state.type;

  return (
    <Router>
    <div> Welcome {email}! you are {type} </div>
      <div>
        <AdminDrawer />
      </div>

      <Switch>

        <Route exact path="/Admin/">
          <Orders />
        </Route>

        <Route exact path="/Admin/allworkers">
          <AllWorkers />
        </Route>

        <Route exact path="/Admin/allusers">
          <AllUsers />
        </Route>

        <Route exact path="/Admin/orders">
          <Orders />
        </Route>

        <Route exact path="/Admin/parkingspots">
          <ParkingSpots />
        </Route>

      </Switch>
    </Router>

  );
}
