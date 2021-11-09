import React from 'react'

import AdminDrawer from '../admin/AdminDrawer';
import Home from '../admin/Home';
import AllUsers from '../admin/AllUsers'
import AllWorkers from '../admin/AllWorkers'
import Orders from '../admin/Orders'
import ParkingSpots from '../admin/ParkingSpots'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function AdminDash() {
  return (
    <Router>
      <div>
        <AdminDrawer />
      </div>

      <Switch>

        <Route exact path="/admin/">
          <Home />
        </Route>

        <Route exact path="/admin/allWorkers">
          <AllWorkers />
        </Route>

        <Route exact path="/admin/allUsers">
          <AllUsers />
        </Route>

        <Route exact path="/admin/orders">
          <Orders />
        </Route>

        <Route exact path="/admin/parkingspots">
          <ParkingSpots />
        </Route>

      </Switch>
    </Router>

  );
}
