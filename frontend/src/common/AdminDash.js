import React from 'react'

import AdminDrawer from '../admin/AdminDrawer';
import Dash from '../admin/Dash';
import AllUsers from '../admin/AllUsers'
import AllWorkers from '../admin/AllWorkers'
import Orders from '../admin/Orders'
import ParkingSpots from '../admin/ParkingSpots'

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
          <Dash />
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
